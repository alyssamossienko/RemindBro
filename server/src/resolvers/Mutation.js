const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var moment = require('moment');

const { APP_SECRET, getUserId, sendNotification } = require('../utils')

async function deleteAllUsers(_, args, context,info) {
  const users = await context.db.query.users({}, info);
  let deletedUsers = [];
  for (let user of users) {
    user = await context.db.mutation.deleteUser({
      where: { id: user.id}
    }, info)
    deletedUsers.push(user)
  }
  return deletedUsers;
}
async function createNotification(_, args, context,info) {
  let status = args.isScheduled ?
    await sendNotification(context, info, args.reminderId) : "SCHEDULED";

  const notification = await context.db.mutation.createNotification({
    data: {
      parentReminder: { connect: { id: args.reminderId } },
      scheduledDelivery: args.scheduledDelivery,
      status: status,
    }
  }, info);

  return notification;
}
async function createReminder(_, args, context,info) {
  const userId = getUserId(context)
  const reminder = await context.db.mutation.createReminder({
    data: {
      title: args.title,
      message: args.message || null,
      description: args.description || null,
      author:  { connect: { id: userId } },
    }
  }, info)
  return reminder;
}

async function createRecipient(_, args, context, info) {
  const userId = getUserId(context)
  const recipient = await context.db.mutation.createRecipient({
    data: {
      //create a connect reminder and recipient
      name: args.recipientName,
      contactInfo: args.contactInfo || null,
      contactMethod: args.contactMethod || null,
      user:  { connect: { id: userId } },
    }
  }, info)
  return recipient;
}

async function connectReminderAndRecipients(_, args, context, info) {
  //this function connect a single reminder with multiple recipient.
  const recipientIDs = args.recipientIDs;
  const targetReminder = await context.db.query.reminder({
    where: { id: args.reminderID }
  }, info)
  for (let id of recipientIDs) {
    //recipient and reminder has a m to m relationship.
    await context.db.mutation.updateReminder({
      data: {
        recipients: {
          connect: [
            { id: id }
          ]
        }
      },
      where: {
        id: targetReminder.id
      },
    }, info)
  }
  return targetReminder;
}

// async function createNotification(root, args, context,info) {
//   const reminder = await context.db.query.reminder({
//     where: { id: args.reminderId }
//   }, info)
//   //if no contact info provided do not send notif
//   if (!reminder.recipient) return;
//
//   //send email
//
//   const notification = await context.db.mutation.createNotification({
//     parent: { connect: { id: args.reminderId } }
//   })
// }

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) throw new Error('No such user found');

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) throw new Error('Invalid password');

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

module.exports = {
  connectReminderAndRecipients,
  createReminder,
  createRecipient,
  createNotification,
  signup,
  login,
  deleteAllUsers,
}
