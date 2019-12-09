import "isomorphic-fetch";
/**
 * @description Supports single request and batch request;
 * @param host
 * @param options
 * @param timeOut
 * @returns {Promise}
 */
declare function request(host: string, options: any, timeOut?: number): Promise<unknown>;
/**
 * @description Returns a random hex string
 */
export declare function id(): string;
export default request;
