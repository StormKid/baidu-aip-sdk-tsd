// Type definitions for AipSpeech.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
export declare var METHOD_POST : string;

/**
 * 
 */
export declare var CONTENT_TYPE_JSON : string;

/**
 * 
 */
export declare var HOST_VOP : string;

/**
 * 
 */
export declare var HOST_TSN : string;

/**
 * 
 */
export declare var PATH_VOP : string;

/**
 * 
 */
export declare var PATH_TTS : string;

/**
 * AipSpeech类，构造调用语音接口
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipSpeech {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipSpeech;
		
	/**
	 * 
	 * @param buffer 
	 * @param format 
	 * @param rate 
	 * @param options 
	 */
	recognize(buffer : any, format : any, rate : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param url 
	 * @param callback 
	 * @param format 
	 * @param rate 
	 * @param options 
	 */
	recognizeByUrl(url : any, callback : any, format : any, rate : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param param 
	 */
	asrImpl(param : any): /* void */ any;
		
	/**
	 * 
	 * @param text 
	 * @param options 
	 */
	text2audio(text : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param param 
	 */
	ttsImpl(param : any): /* void */ any;
}
declare var AipSpeech: AipSpeech;
