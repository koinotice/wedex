import { WedexClient } from '../../../Core/WedexClient';
import { LogTypeValue } from '../../../Enum';

describe('System Methods', () => {
	let cbrx: WedexClient;

	beforeAll(() => {
		cbrx = new WedexClient(
			{
				logType: LogTypeValue.None
			}
		);
	});

	describe('# getSystemTime', () => {
		it('should return system time', done => {
			cbrx.System.getSystemTime()
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({ Time: expect.any(Number) })
					);
					done();
				},
				done
			);
		}, 60000);
	});
	describe('# getSystemInfo', () => {
		it('should return system info', done => {
			cbrx.System.getSystemInfo()
				.subscribe(data => {
					expect(data).toEqual(
						expect.objectContaining({
							Phase: expect.any(String),
							Revision: expect.any(String)
						})
					);
					done();
				},
				done
			);
		}, 60000);
	});
});
