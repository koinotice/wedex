import {Observable} from 'rxjs';
import {Utilities} from './Utilities';
import nonceManager from './NounceManager';
import {HttpClient} from '../Connection/HttpClient';
import {DefaultSettings} from '../Model/DefaultSettings';
import {HttpMethod} from '../Enum/HttpMethod';
import {JsonConvert} from 'json2typescript';
import * as Model from '../Model';

export class TransportManager {
	private transportOptions;
	private jsc: JsonConvert;

	constructor(private config: DefaultSettings, private http: HttpClient) {
		this.jsc = new JsonConvert();
		this.transportOptions = {
			method: 'GET',
			agent: false,
			headers: {},
		};
	}

	public publicRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = false
	): Observable<Model.ApiResponse> {
		return this.prepareRequest(httpMethod, url, requestOptions, useCredentials);
	}

	public privateRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = true,
		signed: boolean = false
	): Observable<Model.ApiResponse> {
		return this.prepareRequest(httpMethod, url, requestOptions, useCredentials, signed);
	}

	public prepareRequest(
		httpMethod: HttpMethod,
		url: string,
		requestOptions: any = {},
		useCredentials: boolean = false,
		signed: boolean = false
	): Observable<Model.ApiResponse> {
		if (
			this.config.account.apiKey === null &&
			useCredentials
		) {
			return Observable.throw(new Error('No API Token Found!'));
		}

		let opts = Object.assign({}, this.transportOptions);
		opts.method = httpMethod;

		let requestObject = requestOptions;

		requestObject = Utilities.removeUndefined({
			...requestOptions,
		});
		requestObject = Object.assign({accountId: this.config.account.accountId}, requestObject);

		if (httpMethod === HttpMethod.POST || httpMethod === HttpMethod.PUT || httpMethod === HttpMethod.DELETE) {
			const body = requestObject;
			opts.headers['Content-Type'] = 'application/json';
			opts = Object.assign({body: JSON.stringify(body)}, opts);

		}

		if (useCredentials) {

			opts.headers['X-API-KEY'] = this.config.account.apiKey;
			if (httpMethod !== HttpMethod.GET) {
				opts.headers.nonce = nonceManager.getNonce();
			}
		}
		if (signed) {
			const signature = this.config.account.publicKeyX + ',' + this.config.account.publicKeyY + ',' + this.config.account.secret;

			opts.headers['X-API-SIG'] = signature;
		}

		if (requestObject && httpMethod === HttpMethod.GET) {
			url = `${url}${Utilities.generateQuerySting(requestObject)}`;
		}

		return this.http.request(url, opts);
	}

	public processResponse<T>(res: Model.ApiResponse, classType?: Model.ClassType<T>, dataKey?: string): T | any {
		// tslint:disable-next-line:triple-equals
		if (res.error) {
			throw res.error;
		}
		// console.log(res)
		if (res.resultInfo) {
			if (res.resultInfo.code === 0) {
				let result = (dataKey) ? res[dataKey] : res;
				result = (result) ? result : res;

				if (res === null) {
					return res;
				}
				if (classType) {
					// return result;
					return this.jsc.deserialize(result, classType);
				} else if (!classType) {
					return result;
				}
			} else {
				throw res.resultInfo.message;
			}
		} else {
			throw res;
		}
	}
}
