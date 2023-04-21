const sgMail = require('@sendgrid/mail');

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendgridEmail = async (data) => {
    sgMail.send({...data, from: 'theobadar@gmail.com'}).then(() => console.log('Success gridmail')).catch((error) => console.log(error.message))
    return true
}

// const mail = {
//     to: "noeliapacocha90+cubarek@gmail.com",
//     from: 'theobadar@gmail.com',
//     subject: 'Sendgrid',
//     html: '<p>Long time no see!</p>'
// };

// sgMail.send(mail).then(() => console.log('Success gridmail')).catch((error) => console.log(error.message))
module.exports = sendgridEmail;