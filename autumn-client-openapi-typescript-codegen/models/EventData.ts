/* generated -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
	properties?: Record<string, any>;
};
