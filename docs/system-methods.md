## System Methods

### Wedex.System.getSystemTime()

Get system time as Unix timestamp.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |


#### Return Type
`Observable<SystemTime>`

#### Example
```js
wedex.Trade.
	.subscribe(
		console.log(data);
	});
```



### Wedex.System.getSystemInfo()

Get system info.

#### Parameters

| Parameter | Type | Example |
| --------- | ---- | ------- |
| none      | -    | -       |


#### Return Type
`Observable<SystemInfo>`

#### Example
```js
wedex.System.getSystemInfo()
    .subscribe(
        console.log(data);
    });
```

