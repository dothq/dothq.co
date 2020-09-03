const sgMail = require('@sendgrid/mail');
const fs = require("fs");
const path = require("path")

process.env.SENDGRID_API_KEY = require("./credentials.json")['SENDGRID_KEY']

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = (email, code) => {
  const text = `Thanks for signing up - your Dot ID is almost ready.\n\nEnter the access code below to confirm it's you.\n\n${code}\n\nIf this wasn't you, please let us know.\nSee you on the other side amigo!`

  let content = fs.readFileSync(path.resolve(__dirname, "templates", "signup.html"), "utf8")
  
  const html = content.replace("&#x3C;[code]&#x3E;", code);
  
  const msg = {
    to: email,
    from: {
        email: 'myid@dothq.co',
        name: 'Dot ID'
    },
    subject: "Verify your Dot ID",
    text,
    html
  };
  sgMail.send(msg);
}

exports.sendVerificationEmail = sendVerificationEmail;