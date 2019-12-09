import { LogTypeValue } from '../Enum';

export class WedexSettings {
	public account?: any;

	public logType?: LogTypeValue;
	public logWriter?: (...args) => any;
}
