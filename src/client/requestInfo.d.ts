// Type definitions for requestInfo.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
export declare var HOST_DEFAULT : string;

/**
 * 
 */
export declare var CONTENT_TYPE_FORMDEFAULT : string;

/**
 * 
 */
export declare var SYMBOL_QUERYSTRING_PREFIX : string;

/**
 * 
 */
export declare var SYMBOL_QUERYSTRING_PREFIX_BCE : string;

/**
 * 
 */
export declare var SYMBOL_HTTPS_PREFIX : string;

/**
 * 
 */
export declare var SYMBOL_HTTP_PREFIX : string;

/**
 * RequestInfo类
 * 构造供request库调用的请求信息对象
 * 
 * @constructor
 */
declare interface RequestInfo {
		
	/**
	 * 
	 * @param path 
	 * @param params 
	 * @param method 
	 * @param isHttp 
	 * @param headers 
	 * @return  
	 */
	new (path : any, params : any, method : any, isHttp : any, headers : any): RequestInfo;
		
	/**
	 * 
	 * @param host 
	 */
	setHost(host : any): /* void */ any;
		
	/**
	 * 
	 */
	initCommonHeader(): /* void */ any;
		
	/**
	 * 
	 * @param devAccessToken 
	 */
	makeDevOptions(devAccessToken : any): /* void */ any;
		
	/**
	 * 
	 * @param ak 
	 * @param sk 
	 */
	makeBceOptions(ak : any, sk : any): /* void */ any;
		
	/**
	 * 
	 * @return  
	 */
	getUTCDateStr(): string;
		
	/**
	 * 
	 * @return  
	 */
	getAccessToken(): /* !this.devAccessToken.token */ any;
		
	/**
	 * 
	 * @return  
	 */
	getUrl(): string;
		
	/**
	 * 
	 * @return  
	 */
	getPureUrl(): string;
		
	/**
	 * 
	 * @return  
	 */
	getHttpsUrl(): string;
		
	/**
	 * 
	 * @return  
	 */
	getHttpUrl(): string;
}
declare var RequestInfo: RequestInfo;
