const axios = require("axios")

const cookie = require('cookie');

const { throwError } = require("../../error")

const inboxRoute = async (req, res) => {
    if(!req.body) return throwError(3000, `Body is missing.`, res)
    if(!req.body.token) return throwError(3000, `"token" is missing from body.`, res)
    if(!req.body.email) return throwError(3000, `"email" is missing from body.`, res)

    axios.post(
        `https://mail.dothq.co/SOGo/so/${req.body.email}/Mail/0/folderINBOX/view`, 
        null, 
        { 
            headers: { 
                cookie: `0xHIGHFLYxSOGo=${req.body.token};`, 
                'user-agent': req.headers['User-Agent'], 
                'content-type': 'application/json' 
            } 
        }
    ).then(resp => {
        console.log(resp.status)
        if(resp.status == 200) {
            const { headers } = resp.data;

            let json = {
                emails: []
            }

            headers.shift()

            headers.forEach(email => {
                if(email[4][0].email == email[0][0].email) return;

                let received = email[7].split("-").join(" ")
                    .replace("Jan", "January")
                    .replace("Feb", "February")
                    .replace("Mar", "March")
                    .replace("Apr", "April")
                    .replace("May", "May")
                    .replace("Jun", "June")
                    .replace("Jul", "July")
                    .replace("Aug", "August")
                    .replace("Sep", "September")
                    .replace("Oct", "October")
                    .replace("Nov", "November")
                    .replace("Dec", "December")

                email[7].match(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/) 
                    ? received = "Today at " + email[7] 
                    : ""

                email[7].includes("day")
                    ? received = email[7].split("day ")[0] + "day at " + email[7].split("day ")[1]
                    : ""

                json.emails.push({ 
                    id: email[10],
                    subject: email[3], 
                    received,
                    isRead: email[5] == 1,
                    from: [
                        {
                            name: email[4][0].name,
                            email: `${email[4][0].email}`.toLowerCase()
                        }
                    ],
                    to: email[0][0].email
                })
            })

            res.json(json)
        }
    }).catch(error => {
        console.log(error)
        return throwError(3000, `An error occoured while trying to load this mailbox.`, res)
    })

}

exports.inboxRoute = inboxRoute;