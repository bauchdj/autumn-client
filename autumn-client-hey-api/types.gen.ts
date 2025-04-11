// This file is auto-generated -- do not edit

/**
 * Properties to create a new customer. If a customer with the provided `customer_id` already exists, this object is ignored. Alternatively, use the [/customers](/api-reference/customers) endpoint.
 */
export type CustomerData = {
	/**
	 * Name of the customer
	 */
	name?: string;
	/**
	 * Email of the customer
	 */
	email?: string;
	/**
	 * Unique fingerprint of the customer, used to prevent free trial abuse (eg serial_number, device_id, etc)
	 */
	fingerprint?: string;
};

export type EventData = {
	/**
	 * ID of the feature to track usage for.
	 */
	feature_id?: string;
	/**
	 * How much of the event should be counted towards the balance. Default is 1.
	 */
	value?: number;
	/**
	 * For use in place of the feature_id. This should be used if multiple features are tracked in the same event.
	 */
	event_name?: string;
	/**
	 * Unique identifier for the event. If the same event is sent multiple times, it will be ignored.
	 */
	idempotency_key?: string;
	/**
	 * Event properties.
	 */
	properties?: {
		[key: string]: unknown;
	};
};

export type _Error = {
	error: number;
	message: string;
};

export type PostAttachData = {
	/**
	 * Customer and product to attach
	 */
	body?: {
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
	};
	path?: never;
	query?: never;
	url: "/attach";
};

export type PostAttachResponses = {
	/**
	 * Device attached
	 */
	200: {
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
	};
};

export type PostAttachResponse = PostAttachResponses[keyof PostAttachResponses];

export type PostCustomersData = {
	/**
	 * Customer to create
	 */
	body?: {
		/**
		 * Your unique identifier for the customer
		 */
		id: string;
	} & CustomerData;
	path?: never;
	query?: never;
	url: "/customers";
};

export type PostCustomersResponses = {
	/**
	 * Customer created
	 */
	201: unknown;
};

export type GetCustomersByCustomerIdBillingPortalData = {
	body?: never;
	path: {
		/**
		 * ID which you provided when creating the customer
		 */
		customer_id: string;
	};
	query?: never;
	url: "/customers/{customer_id}/billing_portal";
};

export type GetCustomersByCustomerIdBillingPortalResponses = {
	/**
	 * Successfully retrieved billing portal URL
	 */
	200: {
		/**
		 * URL to access the customer's billing portal
		 */
		url?: string;
	};
};

export type GetCustomersByCustomerIdBillingPortalResponse =
	GetCustomersByCustomerIdBillingPortalResponses[keyof GetCustomersByCustomerIdBillingPortalResponses];

export type PostEventsData = {
	/**
	 * Event to send
	 */
	body?: {
		/**
		 * ID which you provided when creating the customer
		 */
		customer_id: string;
	} & EventData & {
			customer_data?: CustomerData;
		};
	path?: never;
	query?: never;
	url: "/events";
};

export type PostEventsResponses = {
	/**
	 * Event sent
	 */
	200: unknown;
};

export type PostEntitledData = {
	/**
	 * Customer to check
	 */
	body?: {
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
		event_data?: EventData;
		customer_data?: CustomerData;
	};
	path?: never;
	query?: never;
	url: "/entitled";
};

export type PostEntitledResponses = {
	/**
	 * Customer has access to the product
	 */
	200: {
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
	};
};

export type PostEntitledResponse =
	PostEntitledResponses[keyof PostEntitledResponses];

export type ClientOptions = {
	baseUrl: "https://api.useautumn.com/v1" | (string & {});
};
