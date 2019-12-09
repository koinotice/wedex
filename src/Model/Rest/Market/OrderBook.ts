import { JsonObject, JsonProperty } from 'json2typescript';
import { OrderOffer } from './OrderOffer';
import { OrderOfferConverter } from '../../../Converter/OrderOfferConverter';

@JsonObject
export class Orderbook {
	@JsonProperty('version', Number)
	public Version: number = undefined;

	@JsonProperty('timestamp', Number)
	public Timestamp: number = undefined;

	@JsonProperty('bids', OrderOfferConverter)
	public Bids: OrderOffer[] = undefined;

	@JsonProperty('asks', OrderOfferConverter)
	public Asks: OrderOffer[] = undefined;
}
