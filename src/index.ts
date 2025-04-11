import createClient from "openapi-fetch";
import type { RequestBody, ResponseBody } from "./index.d";
import type { paths } from "./types.generated";

export class AutumnClient {
	private client: ReturnType<typeof createClient<paths>>;

	constructor(
		apiKey: string,
		baseUrl: string = "https://api.useautumn.com/v1"
	) {
		this.client = createClient<paths>({
			baseUrl,
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});
	}

	async attachProduct(params: RequestBody<"/attach", "post">): Promise<{
		data?: ResponseBody<"/attach", "post", "200">;
		error?: unknown;
	}> {
		const response = await this.client.POST("/attach", {
			body: params,
		});
		return {
			data: response.data,
			error: response.error,
		};
	}

	async createCustomer(params: RequestBody<"/customers", "post">): Promise<{
		data?: ResponseBody<"/customers", "post", "201">;
		error?: unknown;
	}> {
		const response = await this.client.POST("/customers", {
			body: params,
		});

		return {
			data: response.data,
			error: response.error,
		};
	}

	async getCustomerBillingPortalUrl(customerId: string): Promise<{
		data?: ResponseBody<
			"/customers/{customer_id}/billing_portal",
			"get",
			"200"
		>;
		error?: unknown;
	}> {
		const response = await this.client.GET(
			"/customers/{customer_id}/billing_portal",
			{
				params: {
					path: { customer_id: customerId },
				},
			}
		);
		return {
			data: response.data,
			error: response.error,
		};
	}

	async events(params: RequestBody<"/events", "post">): Promise<{
		data?: ResponseBody<"/events", "post", "200">;
		error?: unknown;
	}> {
		const response = await this.client.POST("/events", {
			body: params,
		});
		return {
			data: response.data,
			error: response.error,
		};
	}

	async entitled(params: RequestBody<"/entitled", "post">): Promise<{
		data?: ResponseBody<"/entitled", "post", "200">;
		error?: unknown;
	}> {
		const response = await this.client.POST("/entitled", {
			body: params,
		});
		return {
			data: response.data,
			error: response.error,
		};
	}
}
