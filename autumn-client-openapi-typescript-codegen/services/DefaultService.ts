/* generated -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "../core/BaseHttpRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import type { CustomerData } from "../models/CustomerData";
import type { EventData } from "../models/EventData";
export class DefaultService {
	constructor(public readonly httpRequest: BaseHttpRequest) {}
	/**
	 * Returns a Stripe Checkout URL for the customer to complete their purchase, or handles the purchase if the customer's card is already on file.
	 * @param requestBody Customer and product to attach
	 * @returns any Device attached
	 * @throws ApiError
	 */
	public postAttach(requestBody?: {
		/**
		 * Your unique identifier for the customer
		 */
		customer_id: string;
		/**
		 * Product ID, set when creating the product in the Autumn dashboard
		 */
		product_id: string;
		/**
		 * List of product IDs to attach to the customer in the same subscription or transaction
		 */
		product_ids?: Array<string>;
		/**
		 * URL to redirect to after the purchase is successful
		 */
		success_url?: string;
		/**
		 * Always return a Stripe Checkout URL, even if the customer's card is already on file.
		 */
		force_checkout?: boolean;
		/**
		 * An array of billing options for the product. Required for some pricing types.
		 */
		options?: Array<{
			/**
			 * Feature ID of the feature that will be affected by the options.
			 */
			feature_id?: string;
			/**
			 * Quantity of the feature (eg number of seats) to be purchased. Required if billing is in-advance usage-based.
			 */
			quantity?: number;
			/**
			 * Customer will be charged for this product when the balance of this feature falls below this threshold. Required if billing is threshold-based.
			 */
			threshold?: number;
		}>;
		customer_data?: CustomerData;
	}): CancelablePromise<{
		/**
		 * URL to the Stripe checkout page. Only present if payment is required.
		 */
		checkout_url?: string;
		/**
		 * Indicates if the product change was successful. Only present if payment is not required.
		 */
		success?: boolean;
		/**
		 * Description of the action taken
		 */
		message?: string;
	}> {
		return this.httpRequest.request({
			method: "POST",
			url: "/attach",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * Create a new customer
	 * @param requestBody Customer to create
	 * @returns any Customer created
	 * @throws ApiError
	 */
	public postCustomers(requestBody?: CustomerData): CancelablePromise<any> {
		return this.httpRequest.request({
			method: "POST",
			url: "/customers",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * Get the customer's Stripe billing portal URL, so they can manage their subscription and see invoice history.
	 * @param customerId ID which you provided when creating the customer
	 * @returns any Successfully retrieved billing portal URL
	 * @throws ApiError
	 */
	public getCustomersBillingPortal(customerId: string): CancelablePromise<{
		/**
		 * URL to access the customer's billing portal
		 */
		url?: string;
	}> {
		return this.httpRequest.request({
			method: "GET",
			url: "/customers/{customer_id}/billing_portal",
			path: {
				customer_id: customerId,
			},
		});
	}
	/**
	 * Send a usage event to Autumn
	 * @param requestBody Event to send
	 * @returns any Event sent
	 * @throws ApiError
	 */
	public postEvents(
		requestBody?: EventData & {
			/**
			 * ID of the feature to track usage for.
			 */
			feature_id: string;
		}
	): CancelablePromise<any> {
		return this.httpRequest.request({
			method: "POST",
			url: "/events",
			body: requestBody,
			mediaType: "application/json",
		});
	}
	/**
	 * Check if a customer is allowed to use a feature
	 * @param requestBody Customer to check
	 * @returns any Customer has access to the product
	 * @throws ApiError
	 */
	public postEntitled(requestBody?: {
		/**
		 * ID which you provided when creating the customer
		 */
		customer_id: string;
		/**
		 * ID of the feature to check access to
		 */
		feature_id: string;
		/**
		 * If you know the quantity of the feature the end user is consuming in advance
		 */
		required_quantity?: number;
		/**
		 * Record a usage event together with checking access, in the same request. For dedicated usage tracking (recommended), see [/events](/api-reference/events).
		 */
		event_data?: EventData;
		customer_data?: CustomerData;
	}): CancelablePromise<{
		/**
		 * Whether the customer has access to the feature
		 */
		allowed?: boolean;
		/**
		 * Balances of this feature / credits using this feature for the customer
		 */
		balances?: Array<{
			/**
			 * ID of the feature
			 */
			feature_id?: string;
			/**
			 * Balance of the feature
			 */
			balance?: number;
			/**
			 * Required amount of the feature
			 */
			required?: number;
		}>;
	}> {
		return this.httpRequest.request({
			method: "POST",
			url: "/entitled",
			body: requestBody,
			mediaType: "application/json",
		});
	}
}
