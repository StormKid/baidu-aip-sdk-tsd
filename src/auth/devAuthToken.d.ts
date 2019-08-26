// Type definitions for devAuthToken.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 提前获取access_token的时间 默认24个小时
 * 
 * @type {number}
 */
export declare var DEFAULT_FETCH_AHEAD_DURATION : number;

/**
 * devAuthToken类
 * 百度开发者token信息包装类
 * 
 * @constructor
 * @param {string} token access_token
 * @param {number} expireTime 多久之后过期
 * @param {string} scope 权限
 */
declare interface DevAuthToken {
		
	/**
	 * 
	 * @param token 
	 * @param expireTime 
	 * @param scope 
	 * @return  
	 */
	new (token : any, expireTime : any, scope : any): DevAuthToken;
		
	/**
	 * 
	 */
	initScope(): /* void */ any;
		
	/**
	 * 
	 * @param scope 
	 * @return  
	 */
	hasScope(scope : any): /* !this.hasScopeFlag */ any;
		
	/**
	 * 
	 * @return  
	 */
	isExpired(): boolean;
		
	/**
	 * 设置提前获取access_token的时间
	 * @param duration 
	 */
	setExpireAhead(duration : any): /* void */ any;
		
	/**
	 * 
	 */
	DEFAULT_EXPIRE_DURATION : number;
}
declare var DevAuthToken: DevAuthToken;
