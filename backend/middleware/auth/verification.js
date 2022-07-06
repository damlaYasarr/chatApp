const nodemailer = require("nodemailer")

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({

            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use TLS
            auth: {
                user: "damlayasar40@gmail.com",
                pass: "mrldkwheysjvnqit",

            },

        });
        await transporter.sendMail({
            from: "damlayasar40@gmail.com",
            to: email,
            subject: subject,
            text: text
        })
        console.log("email send sucessfully")
    } catch (error) {
        console.log("email NOT send ")
        console.log(error)
    }
}


module.exports = { sendEmail }