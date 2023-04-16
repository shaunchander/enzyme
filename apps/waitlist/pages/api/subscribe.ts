import type { NextApiHandler } from "next";

import Mailgun from "mailgun.js";
import formData from "form-data";
const client = new Mailgun(formData);

const mg = client.client({ username: "api", key: process.env.MAILGUN_API_KEY });

export const handler: NextApiHandler = async (req, res) => {
	const { email } = req.body;

	if (!email) {
		res.status(400).send("Email is required.");
		return;
	}

	try {
		console.log(`Adding ${email} to the waitlist...`);

		await mg.lists.members.createMember("info@mg.getenzyme.app", {
			address: email,
			upsert: "yes",
		});

		console.log(`Added ${email} to the waitlist!`);

		return res.status(201).send("Success!");
	} catch (err) {
		console.error(err);
		return res.status(500).send("Error adding email to list.");
	}
};

export default handler;
