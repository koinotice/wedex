## Trade Methods

### Wedex.Trade.getOrder(param)

Get the data for the order specified.

#### Parameters

| Parameter | Type   | Example                                |
| --------- | ------ | -------------------------------------- |
| orderId   | string | '0941ef71-effa-425c-a390-0dc837119aca' |

#### Return Type

`Observable<Order>`

#### Example

```js
wedex.Trade.getOrder('0941ef71-effa-425c-a390-0dc837119aca')
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.getOrderTrades(param)

Get all the trades for the order specified.

#### Parameters

| Parameter | Type   | Example                                |
| --------- | ------ | -------------------------------------- |
| orderId   | string | '07797042-7f4b-4d09-8c25-e55fa2f80adx' |

#### Return Type

`Observable<OrderTrade[]>`

#### Example

```js
wedex.Trade.getOrderTrade('07797042-7f4b-4d09-8c25-e55fa2f80adx')
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.getAllOrder(...params)

Get all open trades.

#### Parameters

| Parameter         | Type   | Example                  |
| ----------------- | ------ | ------------------------ |
| market (Optional) | string | 'BTC-USDT'               |
| limit (Optional)  | number | Default: 10, Maximum: 50 |

#### Return Type

`Observable<AllOrder[]>`

#### Example

```js
wedex.Trade.getAllOrder()
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.placeBuyOrder(...params)

Place a buy order.

#### Parameters

| Parameter | Type                | Example                   |
| --------- | ------------------- | ------------------------- |
| market    | string              | 'SNT-ETH'                 |
| type      | PlaceOrderTypeValue | PlaceOrderTypeValue.Limit |
| price     | number              | 0.0000119                 |
| size      | number              | 280                       |

#### Return Type

`Observable<PlaceOrder>`

#### Example

```js
wedex.Trade.placeBuyOrder('SNT-ETH', OrderTypeValue.Limit, 0.0000119, 280)
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.placeSellOrder(...params)

Place a sell order.

#### Parameters

| Parameter | Type                | Example                   |
| --------- | ------------------- | ------------------------- |
| market    | string              | 'SNT-ETH'                 |
| type      | PlaceOrderTypeValue | PlaceOrderTypeValue.Limit |
| price     | number              | 0.0000119                 |
| number    | size                | 280                       |

#### Return Type

`Observable<PlaceOrder>`

#### Example

```js
wedex.Trade.placeSellOrder('SNT-ETH', OrderTypeValue.Limit, 0.0000119, 280)
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.modifyOrder(...params)

Modify an existing order specified.

#### Parameters

| Parameter | Type   | Example                                |
| --------- | ------ | -------------------------------------- |
| orderId   | string | '0941ef71-effa-425c-a390-0dc837119aca' |
| price     | number | 0.0000110                              |
| number    | size   | 300                                    |

#### Return Type

`Observable<Boolean>`

#### Example

```js
wedex.Trade.modifyOrder('0941ef71-effa-425c-a390-0dc837119aca', 0.0000110, 300)
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.cancelOrder(param)

Cancel an existing order specified.

#### Parameters

| Parameter | Type   | Example                                |      |
| --------- | ------ | -------------------------------------- | ---- |
| orderId   | string | '0941ef71-effa-425c-a390-0dc837119aca' |      |

#### Return Type

`Observable<Boolean>`

#### Example

```js
wedex.Trade.cancelOrder('0941ef71-effa-425c-a390-0dc837119aca', 0.0000110, 300)
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.getOrderHistory(...params)

Get the order history data.

#### Parameters

| Parameter         | Type   | Example                  |
| ----------------- | ------ | ------------------------ |
| market (Optional) | string | 'SNT-ETH'                |
| limit (Optional)  | number | Default: 10, Maximum: 50 |

#### Return Type

`Observable<OrderHistory[]>`

#### Example

```js
wedex.Trade.getOrderHistory('SNT-ETH')
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.getTrade(param)

Get the trade data of a specific for the account.

#### Parameters

| Parameter | Type   | Example                                | Description          |
| --------- | ------ | -------------------------------------- | -------------------- |
| tradeId   | string | 'ecb560bc-a4cc-4366-88c8-cb12ebbd7b23' | The id of the Trade. |

#### Return Type

`Observable<Trade>`

#### Example

```js
wedex.Trade.getTrade('ecb560bc-a4cc-4366-88c8-cb12ebbd7b23')
	.subscribe(
		console.log(data);
	});
```



### Wedex.Trade.getTradeHistory(...params)

Get the historical trade data of a specific for the account.

#### Parameters

| Parameter         | Type   | Example                  |
| ----------------- | ------ | ------------------------ |
| market (Optional) | string | 'SNT-ETH'                |
| limit (Optional)  | number | Default: 10, Maximum: 50 |

#### Return Type

`Observable<Trade[]>`

#### Example

```js
wedex.Trade.getTradeHistory('SNT-ETH')
	.subscribe(
		console.log(data);
	});
```
