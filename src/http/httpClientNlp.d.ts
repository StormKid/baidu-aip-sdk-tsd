// Type definitions for httpClientNlp.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace HttpClientNlp.prototype{
	// HttpClientNlp.prototype.req.!0
	
	/**
	 * 
	 */
	interface Req0 {
	}
}

/**
 * HttpClientNlp类
 * nlp接口调用使用GBK编码解码实现,依赖iconv-lite库
 * @see https://github.com/ashtuchkin/iconv-lite
 * 
 * @class
 * @extends HttpClient
 * @constructor
 */
declare interface HttpClientNlp {
		
	/**
	 * 
	 * @return  
	 */
	new (): HttpClientNlp;
		
	/**
	 * 
	 * @param options 
	 * @return  
	 */
	req(options : HttpClientNlp.prototype.Req0): /* HttpClientNlp.prototype.+Promise */ any;
		
	/**
	 * 
	 * @param requestInfo 
	 * @return  
	 */
	postWithInfo(requestInfo : any): Promise;
		
	/**
	 * 
	 * @param param 
	 */
	createBody(param : any): /* void */ any;
}
declare var HttpClientNlp: HttpClientNlp;
