import { WedexClient } from '../../../Core/WedexClient';
import { BigNumber } from 'bignumber.js';
import { TimeframeValue } from '../../../Enum';
import { LogTypeValue } from '../../../Enum';

describe('Chart Methods', () => {
	let cbrx: WedexClient;

	beforeAll(() => {
		cbrx = new WedexClient(
			{
				logType: LogTypeValue.None
			}
		);
	});

	describe('# getCandles', () => {
		it('should return a list of candle data', done => {
			cbrx.Chart.getCandles('BTC-USDT', TimeframeValue.SixHour, new Date('2018-02-02'))
				.subscribe(data => {
					expect(data).toEqual(
						expect.arrayContaining([{
							Timeframe: expect.any(String),
							TradingPairId: expect.any(String),
							Timestamp: expect.any(Number),
							Open: expect.any(BigNumber),
							Close: expect.any(BigNumber),
							High: expect.any(BigNumber),
							Low: expect.any(BigNumber),
							Volume: expect.any(BigNumber)
						}])
					);
					done();
				},
					done
				);
		}, 60000);
	});
});
