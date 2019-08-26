// Type definitions for httpClient.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace HttpClient.prototype{
	// HttpClient.prototype.req.!0
	
	/**
	 * 
	 */
	interface Req0 {
				
		/**
		 * 
		 */
		timeout : number;
	}
}

/**
 * HttpClient类
 * 通用接口调用，依赖request库
 * @see https://github.com/request/request
 * 
 * @class
 * @constructor
 */
declare interface HttpClient {
		
	/**
	 * 
	 * @return  
	 */
	new (): HttpClient;
		
	/**
	 * 
	 * @param requestInfo 
	 * @return  
	 */
	postWithInfo(requestInfo : any): /* HttpClient.prototype.+Promise */ any;
		
	/**
	 * 
	 * @param options 
	 * @return  
	 */
	req(options : HttpClient.prototype.Req0): Promise<any>;
		
	/**
	 * 用来设置request库的参数，会覆盖所有options，设置时请确保你知道它的作用
	 * @see https://github.com/request/request#requestoptions-callback
	 * @see https://github.com/request/request
	 * @param options 
	 */
	setRequestOptions(options : any): /* void */ any;
		
	/**
	 * 用来获取和设置request库的参数，会覆盖所有options，设置时请确保你知道它的作用
	 * 优先级高于setRequestOptions
	 * 
	 * @see https://github.com/request/request#requestoptions-callback
	 * @see https://github.com/request/request
	 * @param interceptorCallback 
	 */
	setRequestInterceptor(interceptorCallback : any): /* void */ any;
		
	/**
	 * 
	 */
	DEFAULT_TIMEOUT : number;
}
declare const HttpClient: HttpClient;
