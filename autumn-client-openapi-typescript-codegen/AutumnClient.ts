/* generated -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import { FetchHttpRequest } from "./core/FetchHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { DefaultService } from "./services/DefaultService";
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class AutumnClient {
	public readonly default: DefaultService;
	public readonly request: BaseHttpRequest;
	constructor(
		config?: Partial<OpenAPIConfig>,
		HttpRequest: HttpRequestConstructor = FetchHttpRequest
	) {
		this.request = new HttpRequest({
			BASE: config?.BASE ?? "https://api.useautumn.com/v1",
			VERSION: config?.VERSION ?? "1.0.0",
			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
			CREDENTIALS: config?.CREDENTIALS ?? "include",
			TOKEN: config?.TOKEN,
			USERNAME: config?.USERNAME,
			PASSWORD: config?.PASSWORD,
			HEADERS: config?.HEADERS,
			ENCODE_PATH: config?.ENCODE_PATH,
		});
		this.default = new DefaultService(this.request);
	}
}
