import {JsonObject, JsonProperty} from 'json2typescript';
import {BigNumberConverter} from '../../../Converter/BigNumberConverter';
import {BigNumber} from 'bignumber.js';
import {DateTimeConverter} from '../../../Converter/DateTimeConverter';

@JsonObject
export class Ticker {
	// "market": "string",
	// "timestamp": 0,
	// "size": "string",
	// "volume": "string",
	// "open": "string",
	// "high": "string",
	// "low": "string",
	// "close": "string",
	// "count": 0,
	// "bid": "string",
	// "ask": "string"
	//

	@JsonProperty('market', String)
	public Market: string = undefined;

	@JsonProperty('timestamp', DateTimeConverter)
	public Timestamp: Date = undefined;

	@JsonProperty('size', String)
	public Size: string = undefined;

	@JsonProperty('volume', String)
	public Volume: string = undefined;

	@JsonProperty('open', String)
	public Open: string = undefined;

	@JsonProperty('high', String)
	public High: string = undefined;

	@JsonProperty('low', String)
	public Low: string = undefined;

	@JsonProperty('close', String)
	public Close: string = undefined;

	@JsonProperty('count', Number)
	public Count: number = undefined;

	@JsonProperty('bid', String)
	public Bid: string = undefined;

	@JsonProperty('ask', String)
	public Ask: string = undefined;
	// @JsonProperty('24h_high', BigNumberConverter)
	// public High24h: BigNumber = undefined;
	//
	// @JsonProperty('24h_low', BigNumberConverter)
	// public Low24h: BigNumber = undefined;
	//
	// @JsonProperty('24h_open', BigNumberConverter)
	// public Open24h: BigNumber = undefined;
	//
	// @JsonProperty('24h_volume', BigNumberConverter)
	// public Volume24h: BigNumber = undefined;
	//
	// @JsonProperty('last_trade_price', BigNumberConverter)
	// public LastTradePrice: BigNumber = undefined;
	//
	// @JsonProperty('highest_bid', BigNumberConverter)
	// public HighestBid: BigNumber = undefined;
	//
	// @JsonProperty('lowest_ask', BigNumberConverter)
	// public LowestAsk: BigNumber = undefined;
}
