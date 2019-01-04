require('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const logger = require('morgan')
const app = express()

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS
	}
})

app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'dist')))

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {

	const emailTemplate = ({ name, email, comment }) => {
		return {
			from: email,
			to: 'davidjohnwoolf@gmail.com',
			subject: 'Contact Message - davidwoolf.info',
			text: `Name: ${ name }\nEmail: ${ email }\nComment: ${ comment }`
		}
	}

	if (req.body.name && req.body.email && req.body.comment) {

		return transporter.sendMail(emailTemplate(req.body), (err, info) => {

			if (err) {
				console.error(err)
				return res.json({ status: 'error', message: 'transporter.sendMail encountered an error', data: err })
			}

			return res.json({ status: 'success', data: info })
		})
	}

	return res.json({ status: 'failure', data: { message: 'Error: Request body missing name, email, or comment' } })
})

app.listen(process.env.PORT || 8080, () => console.log('listening...'))

module.exports = app