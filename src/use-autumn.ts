import { client } from "./client/client.gen";
import { postEntitled } from "./client/sdk.gen";

client.setConfig({
	headers: {
		Authorization: `Bearer ${process.env.AUTUMN_API_KEY}`,
	},
});

async function main() {
	const response = await postEntitled({
		client,
		body: {
			customer_id: "",
			feature_id: "",
		},
	});

	console.log(response);
}

main();
