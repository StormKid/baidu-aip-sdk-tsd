// Type definitions for AipImageClassify.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipImageClassify.prototype{
	// AipImageClassify.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
				
		/**
		 * 
		 */
		image : string;
				
		/**
		 * 
		 */
		targetPath : string;
	}
}

/**
 * 
 */
export declare var METHOD_POST : string;

/**
 * 
 */
export declare var ADVANCED_GENERAL_PATH : string;

/**
 * 
 */
export declare var DISH_DETECT_PATH : string;

/**
 * 
 */
export declare var CAR_DETECT_PATH : string;

/**
 * 
 */
export declare var LOGO_SEARCH_PATH : string;

/**
 * 
 */
export declare var LOGO_ADD_PATH : string;

/**
 * 
 */
export declare var LOGO_DELETE_PATH : string;

/**
 * 
 */
export declare var ANIMAL_DETECT_PATH : string;

/**
 * 
 */
export declare var PLANT_DETECT_PATH : string;

/**
 * 
 */
export declare var OBJECT_DETECT_PATH : string;

/**
 * 
 */
export declare var LANDMARK_PATH : string;

/**
 * AipImageClassify类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipImageClassify {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipImageClassify;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipImageClassify.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 通用物体识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   baike_num 返回百科信息的结果数，默认不返回
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	advancedGeneral(image : string, options : any): Promise;
		
	/**
	 * 菜品识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   top_num 返回预测得分top结果数，默认为5
	 *   filter_threshold 默认0.95，可以通过该参数调节识别效果，降低非菜识别率.
	 *   baike_num 返回百科信息的结果数，默认不返回
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	dishDetect(image : string, options : any): Promise;
		
	/**
	 * 车辆识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   top_num 返回预测得分top结果数，默认为5
	 *   baike_num 返回百科信息的结果数，默认不返回
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	carDetect(image : string, options : any): Promise;
		
	/**
	 * logo商标识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   custom_lib 是否只使用自定义logo库的结果，默认false：返回自定义库+默认库的识别结果
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	logoSearch(image : string, options : any): Promise;
		
	/**
	 * logo商标识别—添加接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {string} brief - brief，检索时带回。此处要传对应的name与code字段，name长度小于100B，code长度小于150B
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param brief 
	 * @param options 
	 * @return  
	 */
	logoAdd(image : string, brief : string, options : any): Promise;
		
	/**
	 * logo商标识别—删除接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	logoDeleteByImage(image : string, options : any): Promise;
		
	/**
	 * logo商标识别—删除接口
	 * 
	 * @param {string} contSign - 图片签名（和image二选一，image优先级更高）
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	logoDeleteBySign(contSign : string, options : any): Promise;
		
	/**
	 * 动物识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   top_num 返回预测得分top结果数，默认为6
	 *   baike_num 返回百科信息的结果数，默认不返回
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	animalDetect(image : string, options : any): Promise;
		
	/**
	 * 植物识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   baike_num 返回百科信息的结果数，默认不返回
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	plantDetect(image : string, options : any): Promise;
		
	/**
	 * 图像主体检测接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   with_face 如果检测主体是人，主体区域是否带上人脸部分，0-不带人脸区域，其他-带人脸区域，裁剪类需求推荐带人脸，检索/识别类需求推荐不带人脸。默认取1，带人脸。
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	objectDetect(image : string, options : any): Promise;
		
	/**
	 * 地标识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	landmark(image : string, options : any): Promise;
}
declare var AipImageClassify: AipImageClassify;
