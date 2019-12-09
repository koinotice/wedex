import { LogTypeValue } from '../Enum';

export class CobinhoodRxSettings {
	public account?: any;

	public logType?: LogTypeValue;
	public logWriter?: (...args) => any;
}
