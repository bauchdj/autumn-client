import { AutumnClient } from "./AutumnClient";
import { ApiError } from "./core/ApiError";

const client = new AutumnClient({
	HEADERS: {
		Authorization: `Bearer ${process.env.AUTUMN_API_KEY}`,
	},
});

async function main() {
	try {
		const response = await client.default.postEntitled({
			customer_id: "",
			feature_id: "",
		});

		console.log(response);
	} catch (error) {
		if (error instanceof ApiError) {
			console.error(
				"API Error:",
				error.status,
				error.message,
				error.body
			);
		} else {
			throw error;
		}
	}
}

main();
