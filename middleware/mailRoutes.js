const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");
router.post("/mail", (req, res) => {
	var transporter = nodemailer.createTransport({
		service: "outlook",
		auth: {
			user: "ioncea@outlook.de",
			pass: "test123mail456",
		},
	});

	var mailOptions = {
		from: "ioncea@outlook.de",
		to: "lapedatu.codrin@yahoo.com",
		subject: "Ioncea botul de mailuri",
		text: "Salut",
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
});

module.exports = router;
