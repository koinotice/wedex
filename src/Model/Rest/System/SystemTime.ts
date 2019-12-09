import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class SystemTime {
	@JsonProperty('timestamp', Number, false)
	public Timestamp: number = undefined;
}
