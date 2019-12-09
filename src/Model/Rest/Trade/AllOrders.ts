import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from '../../../Converter/BigNumberConverter';
import {BigNumber} from 'bignumber.js';
import {DateTimeConverter} from '../../../Converter/DateTimeConverter';

@JsonObject
export class AllOrder {
	// tslint:disable-next-line:indent
	@JsonProperty('hash', String)
	public Hash: string = undefined;

	@JsonProperty('clientOrderId', String)
	public ClientOrderId: string = undefined;

	@JsonProperty('size', BigNumberConverter)
	public Size: BigNumber = undefined;

	@JsonProperty('volume', BigNumberConverter)
	public Volume: BigNumber = undefined;

	@JsonProperty('price', BigNumberConverter)
	public Price: BigNumber = undefined;

	@JsonProperty('filledSize', BigNumberConverter)
	public filledSize: BigNumber = undefined;


	@JsonProperty('filledVolume', BigNumberConverter)
	public filledVolume: BigNumber = undefined;


	@JsonProperty('filledFee', BigNumberConverter)
	public filledFee: BigNumber = undefined;


	@JsonProperty('status', String)
	public Status: string = undefined;

	@JsonProperty('side', String)
	public Side: string = undefined;

	@JsonProperty('market', String)
	public Market: string = undefined;

	@JsonProperty('validSince', DateTimeConverter)
	public ValidSince: Date = undefined;

	@JsonProperty('validSince', DateTimeConverter)
	public ValidUntil: Date = undefined;

	@JsonProperty('timestamp', DateTimeConverter)
	public Timestamp: Date = undefined;
}
