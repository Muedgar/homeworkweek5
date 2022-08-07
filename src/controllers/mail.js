const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


/**
 * 
 * @param {*} token 
 * @param {*} user 

 */

const sendUserActivationEmail = async () => {
  try {
    /** The link should be the corresponding page on the fromtend where a password is resetted
     * This way the frontend pulls the token from URL query  and makes an API with the token to activate
     * the users accounts. This applies for reseting passwords too.
     */
    console.log("trying to send email...");
    const link = `localhost:3005/api/users/auth/activate?token=`;
    const htmlBody = `
    <html>
        <body>
            <span>
               <p>Hello,</p>
               <p>Please active your account by clicking this link <a>${link}</a></p>
               </span>
        </body>
    </html>`;
    const mailOptions = {
      from: "edgarmutangana@gmail.com", // Sender address
      to: "edgarmutangana@gmail.com", // List of recipients
      subject: "Activate your account", // Subject line,
      html: htmlBody,
    };
    transport.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        }
        console.log(`user activation email sent`, info)
    } )
  } catch (e) {
    console.log(`unable to send user activation email`, e)
  }
};

const sendUserPasswordResetEmail = async (token, user) => {
  try {
    const link = `localhost:3005/api/users/auth/reset?token=${token}`;
    const htmlBody = `
    <html>
        <body>
            <span>
               <p>Hello, ${user.firstname}</p>
               <p>Please reset your password by clicking this link <a href=${link}>${link}</a></p>
               </span>
        </body>
    </html>`;
    const mailOptions = {
      from: "nodejs.solvit@gmail.com", // Sender address
      to: user.email, // List of recipients
      subject: "Rsest your Password", // Subject line,
      html: htmlBody,
    };
    transport.sendMail(mailOptions, (err, info) => {
        console.log(`passowrd reset email  for sent`)
    } )
  } catch (e) {
    console.log(`unable to send user password reset email`, e)
  }
};


// module.exports = {
//   sendUserActivationEmail,
//   sendUserPasswordResetEmail
// };

sendUserActivationEmail();