// Type definitions for auth.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Auth.prototype{
	// Auth.prototype.generateAuthorization.!6
	type GenerateAuthorization6 = Array<string>;
}
declare namespace Auth.prototype{
	// Auth.prototype.headersCanonicalization.!1
	type HeadersCanonicalization1 = Array<string>;
}
declare namespace Auth.prototype{
	// Auth.prototype.headersCanonicalization.!ret
	type HeadersCanonicalizationRet = Array</* string,[?] */ any>;
}
declare namespace Auth.prototype.HeadersCanonicalizationRet.any{
	// Auth.prototype.headersCanonicalization.!ret.1
	type obj = Array<any>;
}

/**
 * Auth
 * 
 * @constructor
 * @param {string} ak The access key.
 * @param {string} sk The security key.
 */
declare interface Auth {
		
	/**
	 * 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (ak : string, sk : string): Auth;
		
	/**
	 * Generate the signature based on http://gollum.baidu.com/AuthenticationMechanism
	 * 
	 * @param {string} method The http request method, such as GET, POST, DELETE, PUT, ...
	 * @param {string} resource The request path.
	 * @param {Object=} params The query strings.
	 * @param {Object=} headers The http request headers.
	 * @param {number=} timestamp Set the current timestamp.
	 * @param {number=} expirationInSeconds The signature validation time.
	 * @param {Array.<string>=} headersToSign The request headers list which will be used to calcualate the signature.
	 * 
	 * @return {string} The signature.
	 * @param method 
	 * @param resource 
	 * @param params? 
	 * @param headers? 
	 * @param timestamp? 
	 * @param expirationInSeconds? 
	 * @param headersToSign? 
	 * @return  
	 */
	generateAuthorization(method : string, resource : string, params? : any, headers? : any, timestamp? : number, expirationInSeconds? : number, headersToSign? : Auth.prototype.GenerateAuthorization6): string;
		
	/**
	 * 
	 * @param uri 
	 * @return  
	 */
	uriCanonicalization(uri : string): string;
		
	/**
	 * Canonical the query strings.
	 * 
	 * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalQueryString
	 * @param {Object} params The query strings.
	 * @return {string}
	 * @param params 
	 * @return  
	 */
	queryStringCanonicalization(params : any): string;
		
	/**
	 * Canonical the http request headers.
	 * 
	 * @see http://gollum.baidu.com/AuthenticationMechanism#生成CanonicalHeaders
	 * @param {Object} headers The http request headers.
	 * @param {Array.<string>=} headersToSign The request headers list which will be used to calcualate the signature.
	 * @return {*} canonicalHeaders and signedHeaders
	 * @param headers 
	 * @param headersToSign? 
	 * @param undefined 
	 * @param undefined 
	 * @param undefined 
	 * @return  
	 */
	headersCanonicalization(headers : any, headersToSign: Auth.prototype.HeadersCanonicalization1, param3 : any, param4 : any, param5 : /* ?] */ any): Auth.prototype.HeadersCanonicalizationRet;
		
	/**
	 * 
	 * @param data 
	 * @param key 
	 */
	hash(data : any, key : string): /* void */ any;
}
declare var Auth: Auth;
