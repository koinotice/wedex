## Market Methods

### Wedex.Market.getCurrencies()

Get all the market currencies.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<Currency[]>`

#### Example

```js
wedex.Market.getCurrencies()
	.subscribe(
		console.log(data);
	});
```



### Wedex.Market.getTradingPairs()

Get the data of all trading pairs.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<TradingPair[]>`

#### Example

```js
wedex.Market.getTradingPairs()
	.subscribe(
		console.log(data);
	});
```



### Wedex.Market.getOrderBook(...params)

Get both bid and ask orders from the order book for a specific market.

#### Parameters

| Parameter        | Type   | Example    | Description             |
| ---------------- | ------ | ---------- | ----------------------- |
| market           | string | 'BTC-USDT' |                         |
| limit (Optional) | number | 10         | Default: 10, Maximum 50 |

#### Return Type

`Observable<Orderbook>`

#### Example

```js
wedex.Market.getCurrencies.getOrderBook('BTC-USDT', 10)
	.subscribe(
		console.log(data);
	});
```



### Wedex.Market.getMarketStats()

Get a snapshot of all market stats.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |

#### Return Type

`Observable<MarketStats[]>`

#### Example

```js
wedex.Market.getMarketStats()
	.subscribe(
		console.log(data);
	});
```



### Wedex.Market.getTicker(param)

Get the tick data for the market specified.

#### Parameters

| Parameter | Type   | Example    |
| --------- | ------ | ---------- |
| market    | string | 'BTC-USDT' |

#### Return Type

`Observable<Ticker>`

#### Example

```js
wedex.Market.getTicker('BTC-USDT')
	.subscribe(
		console.log(data);
	});
```



### Wedex.Market.getRecentTrades(...params)

Get the most recent trade for the market specified.

#### Parameters

| Parameter | Type   | Example    | Description              |
| --------- | ------ | ---------- | ------------------------ |
| market    | string | 'BTC-USDT' |                          |
| limit     | number | 10         | Default: 10,  Maximum 50 |

#### Return Type

`Observable<RecentTrade[]>`

#### Example

```js
wedex.Market.getRecentTrades('BTC-USDT', 10)
	.subscribe(
		console.log(data);
	});
```

