const fs = require('fs');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const config = require('../config');

const mailTemplates = {
    PASSWORD_RESET: {
        title: 'Your password reset link has been generated',
        template: 'reset_password.html'
    },
    WELCOME: {
        title: 'Welcome to our website',
        template: 'welcome.html'
    }
};

const sendMail = async (to, type, data) => { // data: {first_name: 'Bojan', last_name: 'Gavrovski', email: 'bojan@gmail.com'}
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: 'api',
        key: config.get('mailer').api_key
    });

    let title = mailTemplates[type].title;

    let templatePath = `${__dirname}/../../email_templates/${mailTemplates[type].template}`;
    let content = await readTemplate(templatePath);

    for(let i in data) {
        let regex = new RegExp(`\{\{${i}\}\}`, 'g'); // {{first_name}} // {{last_name}} // {{email}}
        content = content.replace(regex, data[i]); // Bojan // Gavrovski // bojan@gmail.com
    }

    let options = {
        from: config.get('mailer').sender_email,
        to: to,
        subject: title,
        html: content
    };

    try {
        let res = await mg.messages.create(config.get('mailer').domain, options);
    } catch(err) {
        throw err;
    }
};

const readTemplate = async (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return success(data);
        })
    });
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