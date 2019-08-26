// Type definitions for AipContentCensor.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipImageCensor.prototype{
	// AipImageCensor.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
				
		/**
		 * 
		 */
		targetPath : string;
	}
}
declare namespace AipImageCensor.prototype{
	// AipImageCensor.prototype.jsonRequestImpl.!0
	
	/**
	 * 
	 */
	interface JsonRequestImpl0 {
				
		/**
		 * 
		 */
		targetPath : string;
	}
}

/**
 * 
 */
export declare var CONTENT_TYPE_JSON : string;

/**
 * 
 */
export declare var METHOD_POST : string;

/**
 * 
 */
export declare var PATH_USER_DEFINED : string;

/**
 * 
 */
export declare var PATH_ANTIPORN_GIF : string;

/**
 * 
 */
export declare var PATH_FACEAUDIT : string;

/**
 * 
 */
export declare var PATH_COMBOCENSOR : string;

/**
 * 
 */
export declare var PATH_REPORT : string;

/**
 * 
 */
export declare var PATH_ANTIPORN : string;

/**
 * 
 */
export declare var PATH_ANTITERROR : string;

/**
 * 
 */
export declare var PATH_ANTISPAM : string;

/**
 * AipContentCensor类，构造调用图像审核对象
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipImageCensor {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipImageCensor;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : {} | any): /* void */ any;
		
	/**
	 * 
	 * @param param 
	 */
	jsonRequestImpl(param: {} | any): /* void */ any;
		
	/**
	 * 
	 * @param image 
	 * @param options 
	 */
	antiPornGif(image : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param image 
	 * @param options 
	 */
	antiPorn(image : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param image 
	 * @param options 
	 */
	antiTerror(image : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param content 
	 * @param options 
	 */
	antiSpam(content : any, options : any): /* void */ any;
		
	/**
	 * 
	 * @param images 
	 * @param type 
	 * @param configId 
	 */
	faceAudit(images : any, type : any, configId : any): /* void */ any;
		
	/**
	 * 
	 * @param image 
	 * @param type 
	 */
	imageCensorUserDefined(image : any, type : any): /* void */ any;
		
	/**
	 * 
	 * @param image 
	 * @param type 
	 * @param scenes 
	 * @param scenesConf 
	 */
	imageCensorComb(image : any, type : any, scenes : any, scenesConf : any): /* void */ any;
		
	/**
	 * 
	 * @param feedback 
	 */
	report(feedback : any): /* void */ any;
}
declare var AipImageCensor: AipImageCensor;
