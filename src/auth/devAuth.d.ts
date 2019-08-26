// Type definitions for devAuth.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
export declare var OPENAPI_TOKEN_URL : string;

/**
 * 
 */
export declare var OPENAPI_GRANTTYPE_CLIENT : string;

/**
 * 
 */
export declare var REQUEST_TOKEN_METHOD : string;

/**
 * devAuth类
 * 百度开发者token获取类
 * 
 * @constructor
 * @param {string} ak API Key.
 * @param {string} sk Secret Key.
 */
declare interface DevAuth {
		
	/**
	 * 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (ak : any, sk : any): DevAuth;
		
	/**
	 * 
	 * @param data 
	 */
	gotData(data : any): /* void */ any;
		
	/**
	 * 
	 * @param err 
	 */
	gotDataError(err : any): /* void */ any;
		
	/**
	 * 
	 */
	getToken(): /* void */ any;
		
	/**
	 * 
	 */
	EVENT_ERRTYPE_ILLEGAL_RESPONSE : string;
		
	/**
	 * 
	 */
	EVENT_ERRTYPE_NETWORK : string;
		
	/**
	 * 
	 */
	EVENT_ERRTYPE_NORMAL : string;
}
declare var DevAuth: DevAuth;
