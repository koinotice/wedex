import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from '../../../Converter/BigNumberConverter';
import {BigNumber} from 'bignumber.js';

@JsonObject
export class Balance {
	@JsonProperty('accountId', Number)
	public Currency: number = undefined;

	@JsonProperty('tokenId', Number)
	public tokenId: number = undefined;

	@JsonProperty('totalAmount', BigNumberConverter)
	public totalAmount: BigNumber = undefined;

	@JsonProperty('frozenAmount', BigNumberConverter)
	public frozenAmount: BigNumber = undefined;

}
