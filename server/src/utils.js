const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'
const sgMail = require('@sendgrid/mail');

async function sendNotification(context, info, reminderId) {
  //send single notification for one reminder's recipients
  //this does NOT create an notification
  const reminder = await context.db.query.reminder({
    where: { id: reminderId }
  },  `{
    title
    message
    recipients {
      id
      contactMethod
      contactInfo
     }
   }`
 );
  const recipientEmails = reminder.recipients.length ?
  reminder.recipients.filter( recipient => {
    return recipient.contactMethod === "EMAIL";
  }).map( recipient => {
    if (recipient.contactInfo) {
      let sendgridFormatEmails = {}
      sendgridFormatEmails["email"] = recipient.contactInfo;
      return sendgridFormatEmails;
    }
  } ) : [];
  if (!recipientEmails.length) return;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const userId = getUserId(context);
  const currentUser = await context.db.query.user({
    where: { id: userId }
  }, `{ email }`)
  console.log("email:" + currentUser.email)
  const msg = {
    to: recipientEmails,
    from: currentUser.email,
    subject: reminder.title,
    text: reminder.message,
  };
  let res = "";
  try {
    await sgMail.send(msg);
    res = "SUCCESS";
    return res;
  } catch(e) {
    res = "FAILLURE";
    return res;
  }
}

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
  sendNotification,
}
