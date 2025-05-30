// generated by borea

import type { Options as ClientOptions, TDataShape, Client } from "@hey-api/client-fetch";
import type {
  AttachData,
  AttachResponse,
  CustomersData,
  BillingPortalData,
  BillingPortalResponse,
  EventsData,
  EntitledData,
  EntitledResponse,
} from "./types.gen";
import { client as _heyApiClient } from "./client.gen";

export type Options<
  TData extends TDataShape = TDataShape,
  ThrowOnError extends boolean = boolean,
> = ClientOptions<TData, ThrowOnError> & {
  /**
   * You can provide a client instance returned by `createClient()` instead of
   * individual options. This might be also useful if you want to implement a
   * custom client.
   */
  client?: Client;
  /**
   * You can pass arbitrary values through the `meta` object. This can be
   * used to access values that aren't defined as part of the SDK function.
   */
  meta?: Record<string, unknown>;
};

/**
 * Returns a Stripe Checkout URL for the customer to complete their purchase, or handles the purchase if the customer's card is already on file.
 */
export const attach = <ThrowOnError extends boolean = false>(
  options?: Options<AttachData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<AttachResponse, unknown, ThrowOnError>({
    security: [
      {
        scheme: "bearer",
        type: "http",
      },
    ],
    url: "/attach",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
};

/**
 * Create a new customer
 */
export const customers = <ThrowOnError extends boolean = false>(
  options?: Options<CustomersData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
    security: [
      {
        scheme: "bearer",
        type: "http",
      },
    ],
    url: "/customers",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
};

/**
 * Get the customer's Stripe billing portal URL, so they can manage their subscription and see invoice history.
 */
export const billingPortal = <ThrowOnError extends boolean = false>(
  options: Options<BillingPortalData, ThrowOnError>,
) => {
  return (options.client ?? _heyApiClient).get<BillingPortalResponse, unknown, ThrowOnError>({
    security: [
      {
        scheme: "bearer",
        type: "http",
      },
    ],
    url: "/customers/{customer_id}/billing_portal",
    ...options,
  });
};

/**
 * Send a usage event to Autumn
 */
export const events = <ThrowOnError extends boolean = false>(
  options?: Options<EventsData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
    security: [
      {
        scheme: "bearer",
        type: "http",
      },
    ],
    url: "/events",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
};

/**
 * Check if a customer is allowed to use a feature
 */
export const entitled = <ThrowOnError extends boolean = false>(
  options?: Options<EntitledData, ThrowOnError>,
) => {
  return (options?.client ?? _heyApiClient).post<EntitledResponse, unknown, ThrowOnError>({
    security: [
      {
        scheme: "bearer",
        type: "http",
      },
    ],
    url: "/entitled",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
};
