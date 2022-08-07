const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("../../config/config");
const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(config.clientId, config.clientSecret);
OAuth2_client.setCredentials( { refresh_token: config.refreshToken } );

function send_mail(name, recipient) {
    const accessToken = OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        }
    });

    const mail_options = {
        from: `The Test Email <${config.user}>`,
        to: recipient,
        subject: 'A message from any source',
        html: get_html_message(name)
    }

    transport.sendMail(mail_options, function(error, result) {
        if(error) {
            console.log(error);
        }else {
            console.log(result);
        }
        transport.close();
    });
}

function get_html_message(name) {
    return `
            <h3>${name}! You're awesome.</h3>
    `
}

send_mail("Hey How are you from test app", "edgarmutangana@gmail.com");
