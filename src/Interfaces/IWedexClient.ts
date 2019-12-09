import { SystemAPI } from '../Core/API/SystemAPI';
import { MarketAPI } from '../Core/API/MarketAPI';
import { ChartAPI } from '../Core/API/ChartAPI';
import { TradeAPI } from '../Core/API/TradeAPI';
import { WalletAPI } from '../Core/API/WalletAPI';
import { RequestAPI } from '../Core/API/RequestAPI';

export interface IWedexClient {
	/**
	 * Access all System API methods.
	 *
	 * @type {SystemAPI}
	 * @memberof IWedexClient
	 */
	readonly System: SystemAPI;

	/**
	 * Access all Market API methods.
	 *
	 * @type {MarketAPI}
	 * @memberof IWedexClient
	 */
	readonly Market: MarketAPI;

	/**
	 * Access all Chart API methods.
	 *
	 * @type {ChartAPI}
	 * @memberof IWedexClient
	 */
	readonly Chart: ChartAPI;

	/**
	 * Access all Trade API methods.
	 *
	 * @type {TradeAPI}
	 * @memberof IWedexClient
	 */
	readonly Trade: TradeAPI;

	/**
	 * Access all Wallet API methods.
	 *
	 * @type {WalletAPI}
	 * @memberof IWedexClient
	 */
	readonly Wallet: WalletAPI;

	/**
	 * Access all Request API methods.
	 *
	 * @type {RequestAPI}
	 * @memberof IWedexClient
	 */
	readonly Request: RequestAPI;
}
