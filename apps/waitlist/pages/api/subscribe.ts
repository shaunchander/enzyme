import type { NextApiHandler } from "next";

export const handler: NextApiHandler = async (req, res) => {
	const { email } = req.body;

	if (!email) {
		res.status(400).send("Email is required.");
		return;
	}

	console.log(`Adding ${email} to the waitlist...`);
};

export default handler;
