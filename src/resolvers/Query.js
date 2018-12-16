const { getUserId } = require('../utils')

function allUsers(root, agrs, context,info) {
  return context.db.query.users({}, info)
}

async function userRecipients(root, agrs, context,info) {
  const userId = getUserId(context)
  const recipients = await context.db.query.recipients({
    where: { user: { id: userId } }
  }, info)
  return recipients;
}

async function userReminders(root, agrs, context,info) {
  const userId = getUserId(context)
  const reminders = await context.db.query.reminders({
    where: { author: { id: userId } }
  }, info)
  return reminders;
}

module.exports = {
  userReminders,
  userRecipients,
  allUsers,
}
