class ApiResponseResult {
	public code: number;
	public message: string;
}

export class ApiResponse {
	public resultInfo: ApiResponseResult;
	public data: any;
	public error: any;
	public account: any;
	public accountId: any;

}
