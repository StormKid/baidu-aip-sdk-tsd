// Type definitions for baseClient.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 无授权判断状态
 * 
 * @const
 * @type {number}
 */
export declare var AUTHTYPE_INIT : number;

/**
 * 确定为云用户
 * 
 * @const
 * @type {number}
 */
export declare var AUTHTYPE_BCE : number;

/**
 * 确定为开发者用户（手动输入token模式,以及token中包含了正确的scope）
 * 
 * @const
 * @type {number}
 */
export declare var AUTHTYPE_DEV : number;

/**
 * 获取开发者token成功用户
 * 
 * @const
 * @type {number}
 */
export declare var AUTHTYPE_DEV_OR_BCE : number;

/**
 * 初始状态
 * 
 * @const
 * @type {number}
 */
export declare var STATUS_INIT : number;

/**
 * 获取开发者token中
 * 
 * @const
 * @type {number}
 */
export declare var STATUS_AUTHTYPE_REQESTING : number;

/**
 * 获取开发者token成功，或者确定为云用户
 * 
 * @const
 * @type {number}
 */
export declare var STATUS_READY : number;

/**
 * 非法ak，sk
 * 
 * @const
 * @type {number}
 */
export declare var STATUS_ERROR : number;

/**
 * BaseClient类
 * 各具体接口类基类，处理鉴权逻辑等
 * 
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak The access key.
 * @param {string} sk The security key.
 */
declare interface BaseClient {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @param options 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any, options : any): BaseClient;
		
	/**
	 * 
	 * @param token 
	 * @param expireTime 
	 */
	setAccessToken(token : any, expireTime : any): /* void */ any;
		
	/**
	 * 
	 * @return  
	 */
	authTypeReq(): /* !this.pms */ any;
		
	/**
	 * 
	 * @param token 
	 */
	gotDevAuthSuccess(token : any): /* void */ any;
		
	/**
	 * 
	 * @param err 
	 */
	gotDevAuthFail(err : any): /* void */ any;
		
	/**
	 * 
	 * @param requestInfo 
	 * @param httpClient 
	 */
	doRequest(requestInfo : any, httpClient : any): /* void */ any;
		
	/**
	 * 
	 * @param requestInfo 
	 * @return  
	 */
	checkDevPermission(requestInfo : any): boolean;
		
	/**
	 * 
	 * @param requestInfo 
	 * @return  
	 */
	preRequest(requestInfo : any): boolean;
}
declare var BaseClient: BaseClient;
