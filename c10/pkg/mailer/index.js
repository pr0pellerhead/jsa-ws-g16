const formData = require('form-data');
const Mailgun = require('mailgun.js');
const config = require('../config');

const sendMail = async (to, subject, message) => {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: 'api',
        key: config.get('mailer').api_key
    });

    let options = {
        from: config.get('mailer').sender_email,
        to: to,
        subject: subject,
        html: message
    };

    try {
        let res = await mg.messages.create(config.get('mailer').domain, options);
    } catch(err) {
        throw err;
    }
};

module.exports = {
    sendMail
};

// mg.messages.create(
//     // 'https://api.mailgun.net/v3/sandboxba0709afca584019bdeef25c1b10e64f.mailgun.org', 
//     'sandboxba0709afca584019bdeef25c1b10e64f.mailgun.org',
//     {
//         from: 'pero@pero.com',
//         to: 'bojan@beyondbasics.co',
//         subject: 'Hello Pero',
//         html: '<h1>Hello pero your email is here!</h1>'
//     }
// ).then(res => {
//     console.log('SUCCESS', res);
// }).catch(err => {
//     console.log(err);
// });