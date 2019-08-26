// Type definitions for httpClientExt.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
export declare var CONTENT_TYPE_JSON : string;

/**
 * HttpClientExt类
 * 图像审核某个接口调用需要json的Content-type,请求body为json字符串
 * 
 * @class
 * @extends HttpClient
 * @constructor
 */
declare interface HttpClientExt {
		
	/**
	 * 
	 * @return  
	 */
	new (): HttpClientExt;
		
	/**
	 * 
	 * @param requestInfo 
	 */
	postWithInfo(requestInfo : any): /* void */ any;
		
	/**
	 * 
	 * @param param 
	 * @return  
	 */
	createBody(param : any): string;
}
declare var HttpClientExt: HttpClientExt;
