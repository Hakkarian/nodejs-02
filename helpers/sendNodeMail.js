const nodemailer = require('nodemailer');

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465, // 25 and 2525 are not secure, the most popular trio
    secure: true,
    auth: {
        user: 'theobadar@meta.ua',
        pass: META_PASSWORD
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

// const mail = {
//     to: "noeliapacocha90+cubarek@gmail.com",
//     from: 'theobadar@meta.ua',
//     subject: 'MetaUA',
//     html: '<p>Glory to the Ukraine!</p>'
// };

// transport.sendMail(mail).then(() => console.log('Success nodemail')).catch(() => console.log('Error nodemail'))

const sendNodeMail = async (data) => {
    await transport.sendMail({ ...data, from: "theobadar@meta.ua" }).then(() => console.log('Succes nodemail')).catch((error) => console.log(error.message));
    return true
}

module.exports = sendNodeMail