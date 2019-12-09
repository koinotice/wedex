import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from '../../../Converter/BigNumberConverter';
import {BigNumber} from 'bignumber.js';

@JsonObject
export class OrderOffer {
	@JsonProperty('price', String)
	public Price: string = undefined;

	@JsonProperty('count', Number)
	public Count: number = undefined;

	@JsonProperty('size', String)
	public Size: string = undefined;

	@JsonProperty('volume', String)
	public Volume: string = undefined;
}
