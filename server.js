const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')
const logger = require('morgan')
const app = express()

const port = process.env.PORT || 3000

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS
	}
})

app.use(logger('dev'))

// static files
app.use(express.static(path.join(__dirname, 'dist')))

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

// POST /contact
app.post('/contact', (req, res) => {

	const emailTemplate = ({ name, email, comment }) => {
		return {
			from: email,
			to: 'davidjohnwoolf@gmail.com',
			subject: 'Contact Message - davidwoolf.online',
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

// handle 404
app.use(function (req, res, next) {
	res.status(404).send(
		'<div style="text-align: center; margin: 2rem 0;"><h1>404 - Page Not Found</h1><p>The page '
		+ req.path + ' does not exist</p><p><a href="/">Go to Site</a></p></div>'
	)
})

app.listen(port, () => console.log(`listening on ${ port }...`))

module.exports = app