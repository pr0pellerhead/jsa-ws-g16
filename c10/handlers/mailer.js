const mailer = require('../pkg/mailer');

const send = async (req, res) => {
    try {
        // TODO: validate first
        await mailer.sendMail(req.body.to, req.body.subject, req.body.message);
        return res.status(204).send('');
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

module.exports = {
    send
};