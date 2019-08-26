// Type definitions for cloudAuth.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * CloudAuth类
 * 
 * 百度云鉴权签名类，依赖百度云签名实现(bceAuth目录)
 * @see https://github.com/baidubce/bce-sdk-js
 * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalQueryString
 * @constructor
 * @param {string} ak The access key.
 * @param {string} sk The security key.
 */
declare interface CloudAuth {
		
	/**
	 * 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (ak : any, sk : any): CloudAuth;
		
	/**
	 * 
	 * @param method 
	 * @param uri 
	 * @param params 
	 * @param headers 
	 * @param time 
	 */
	getAuthorization(method : any, uri : any, params : any, headers : any, time : any): /* void */ any;
}
declare var CloudAuth: CloudAuth;
