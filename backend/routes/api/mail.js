const router = require('express').Router()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PWD
    }
})

router.post('/', async (req, res) => {
    const { name, email, title, content } = req.body
    try {
        await transporter.sendMail({
            from: 'Nas',
            to: 'chrow16@kakao.com',
            subject: title,
            html: `<h1>${name} : ${email}</h1><p>${content}</p>`
        })
        res.json({ result: 'ok' })
    } catch (error) {
        res.json({ result: 'err', err })
    }
    res.end()
})


module.exports = router

// const nodemailer = require('nodemailer')

// const sendMail = async () => {
//     const info = await transporter.sendMail({
//         from: 'TestMail@test.com',
//         to: 'chrow16@kakao.com',
//         subject: 'Test',
//         text: 'is ok',
//         html: '<h1>Success</h1>'
//     })
// }

// sendMail().then(() => console.log('success'))
//     .catch(err => console.log('err', err))