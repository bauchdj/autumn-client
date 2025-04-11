import type { paths } from "./types.generated";

/**
 * Utility type for safely extracting request body types from OpenAPI paths
 *
 * @template Path - The API endpoint path (e.g. "/attach")
 * @template Method - The HTTP method for the endpoint (e.g. "post")
 *
 * This type safely handles optional request bodies by:
 * 1. Checking if the path+method combination has a requestBody property
 * 2. Extracting the JSON content type if it exists
 * 3. Returning the inferred type or never if not found
 *
 * Example: RequestBody<"/attach", "post"> will extract the JSON request body type
 * for the POST /attach endpoint, even if requestBody is optional
 */
export type RequestBody<
	Path extends keyof paths,
	Method extends keyof paths[Path]
> = paths[Path][Method] extends {
	requestBody?: { content: { "application/json": infer T } };
}
	? T
	: never;

/**
 * Utility type for safely extracting response body types from OpenAPI paths
 *
 * @template Path - The API endpoint path (e.g. "/attach")
 * @template Method - The HTTP method for the endpoint (e.g. "post")
 * @template StatusCode - The HTTP status code for the response (e.g. "200")
 *
 * This type safely handles the nested response structure by:
 * 1. Checking if the path+method has a responses object with the given status code
 * 2. Checking if that response has a content object with application/json
 * 3. Extracting the JSON type or returning never if any check fails
 *
 * Example: ResponseBody<"/attach", "post", 200> will extract the JSON response type
 * for a 200 response from the POST /attach endpoint
 */
export type ResponseBody<
	Path extends keyof paths,
	Method extends keyof paths[Path],
	StatusCode extends string
> = paths[Path][Method] extends { responses: { [K in StatusCode]: any } }
	? paths[Path][Method]["responses"][StatusCode] extends {
			content: { "application/json": any };
	  }
		? paths[Path][Method]["responses"][StatusCode]["content"]["application/json"]
		: never
	: never;
