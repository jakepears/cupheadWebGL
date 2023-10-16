/** @format */

import fetch from 'node-fetch';

export default async function handler(req: any, res: any) {
	// Call handler function
	await pingHandler(req, res);
}

async function pingHandler(req: any, res: any) {
	const response = await fetch('http://localhost:8000/api/ping');

	const data = await response.json();

	res.status(200).json(data);
}
