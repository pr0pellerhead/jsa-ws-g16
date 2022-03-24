const express = require('express');
const config = require('./pkg/config');
const mailer = require('./handlers/mailer');

const api = express();

api.use(express.json());

api.post('/api/v1/sendmail', mailer.send);

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    console.log('Server started on port', config.get('service').port);
});