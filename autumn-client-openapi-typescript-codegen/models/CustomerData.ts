/* generated -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
