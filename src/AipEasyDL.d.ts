// Type definitions for AipEasyDL.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipEasyDL.prototype{
	// AipEasyDL.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
	}
}

/**
 * 
 */
export declare var METHOD_POST : string;

/**
 * 
 */
export declare var DETECT_PATH : string;

/**
 * 
 */
export declare var SEARCH_PATH : string;

/**
 * 
 */
export declare var USER_ADD_PATH : string;

/**
 * 
 */
export declare var USER_UPDATE_PATH : string;

/**
 * 
 */
export declare var FACE_DELETE_PATH : string;

/**
 * 
 */
export declare var USER_GET_PATH : string;

/**
 * 
 */
export declare var FACE_GETLIST_PATH : string;

/**
 * 
 */
export declare var GROUP_GETUSERS_PATH : string;

/**
 * 
 */
export declare var USER_COPY_PATH : string;

/**
 * 
 */
export declare var USER_DELETE_PATH : string;

/**
 * 
 */
export declare var GROUP_ADD_PATH : string;

/**
 * 
 */
export declare var GROUP_DELETE_PATH : string;

/**
 * 
 */
export declare var GROUP_GETLIST_PATH : string;

/**
 * 
 */
export declare var PERSON_VERIFY_PATH : string;

/**
 * 
 */
export declare var VIDEO_SESSIONCODE_PATH : string;

/**
 * AipEasyDL类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipEasyDL {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipEasyDL;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipEasyDL.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 
	 * @param url 
	 * @param image 
	 * @param options 
	 */
	requestImage(url : any, image : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param url 
	 * @param sound 
	 * @param options 
	 */
	requestSound(url : any, sound : any, options : any): /* void */ any;
}
declare var AipEasyDL: AipEasyDL;
