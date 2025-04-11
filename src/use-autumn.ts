import { AutumnClient } from ".";

const apiKey = process.env.AUTUMN_API_KEY;

if (!apiKey) {
	throw new Error("Missing Autumn API key");
}

const client = new AutumnClient(apiKey);

client
	.entitled({
		customer_id: "your-customer-id",
		feature_id: "your-feature-id",
	})
	.then((result) => {
		if (result.error) {
			console.error(result.error);
		} else {
			console.log(result.data);
		}
	});
