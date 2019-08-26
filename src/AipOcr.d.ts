// Type definitions for AipOcr.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipOcr.prototype{
	// AipOcr.prototype.commonImpl.!0
	
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
export declare var GENERAL_BASIC_PATH : string;

/**
 * 
 */
export declare var ACCURATE_BASIC_PATH : string;

/**
 * 
 */
export declare var GENERAL_PATH : string;

/**
 * 
 */
export declare var ACCURATE_PATH : string;

/**
 * 
 */
export declare var GENERAL_ENHANCED_PATH : string;

/**
 * 
 */
export declare var WEB_IMAGE_PATH : string;

/**
 * 
 */
export declare var IDCARD_PATH : string;

/**
 * 
 */
export declare var BANKCARD_PATH : string;

/**
 * 
 */
export declare var DRIVING_LICENSE_PATH : string;

/**
 * 
 */
export declare var VEHICLE_LICENSE_PATH : string;

/**
 * 
 */
export declare var LICENSE_PLATE_PATH : string;

/**
 * 
 */
export declare var BUSINESS_LICENSE_PATH : string;

/**
 * 
 */
export declare var RECEIPT_PATH : string;

/**
 * 
 */
export declare var TRAIN_TICKET_PATH : string;

/**
 * 
 */
export declare var TAXI_RECEIPT_PATH : string;

/**
 * 
 */
export declare var FORM_PATH : string;

/**
 * 
 */
export declare var TABLE_RECOGNIZE_PATH : string;

/**
 * 
 */
export declare var TABLE_RESULT_GET_PATH : string;

/**
 * 
 */
export declare var VAT_INVOICE_PATH : string;

/**
 * 
 */
export declare var QRCODE_PATH : string;

/**
 * 
 */
export declare var NUMBERS_PATH : string;

/**
 * 
 */
export declare var LOTTERY_PATH : string;

/**
 * 
 */
export declare var PASSPORT_PATH : string;

/**
 * 
 */
export declare var BUSINESS_CARD_PATH : string;

/**
 * 
 */
export declare var HANDWRITING_PATH : string;

/**
 * 
 */
export declare var CUSTOM_PATH : string;

/**
 * AipOcr类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipOcr {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipOcr;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipOcr.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 通用文字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	generalBasic(image : string, options : any): Promise;
		
	/**
	 * 通用文字识别接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	generalBasicUrl(url : string, options : any): Promise;
		
	/**
	 * 通用文字识别（高精度版）接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	accurateBasic(image : string, options : any): Promise;
		
	/**
	 * 通用文字识别（含位置信息版）接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	general(image : string, options : any): Promise;
		
	/**
	 * 通用文字识别（含位置信息版）接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	generalUrl(url : string, options : any): Promise;
		
	/**
	 * 通用文字识别（含位置高精度版）接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   vertexes_location 是否返回文字外接多边形顶点位置，不支持单字位置。默认为false
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	accurate(image : string, options : any): Promise;
		
	/**
	 * 通用文字识别（含生僻字版）接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	generalEnhance(image : string, options : any): Promise;
		
	/**
	 * 通用文字识别（含生僻字版）接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   language_type 识别语言类型，默认为CHN_ENG。可选值包括：<br>- CHN_ENG：中英文混合；<br>- ENG：英文；<br>- POR：葡萄牙语；<br>- FRE：法语；<br>- GER：德语；<br>- ITA：意大利语；<br>- SPA：西班牙语；<br>- RUS：俄语；<br>- JAP：日语；<br>- KOR：韩语；
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 *   probability 是否返回识别结果中每一行的置信度
	 * @return {Promise} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	generalEnhanceUrl(url : string, options : any): Promise;
		
	/**
	 * 网络图片文字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	webImage(image : string, options : any): Promise;
		
	/**
	 * 网络图片文字识别接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_language 是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
	 * @return {Promise} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	webImageUrl(url : string, options : any): Promise;
		
	/**
	 * 身份证识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {string} idCardSide - front：身份证含照片的一面；back：身份证带国徽的一面
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   detect_risk 是否开启身份证风险类型(身份证复印件、临时身份证、身份证翻拍、修改过的身份证)功能，默认不开启，即：false。可选值:true-开启；false-不开启
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param idCardSide 
	 * @param options 
	 * @return  
	 */
	idcard(image : string, idCardSide : string, options : any): Promise;
		
	/**
	 * 银行卡识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	bankcard(image : string, options : any): Promise;
		
	/**
	 * 驾驶证识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	drivingLicense(image : string, options : any): Promise;
		
	/**
	 * 行驶证识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 *   accuracy normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	vehicleLicense(image : string, options : any): Promise;
		
	/**
	 * 车牌识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   multi_detect 是否检测多张车牌，默认为false，当置为true的时候可以对一张图片内的多张车牌进行识别
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	licensePlate(image : string, options : any): Promise;
		
	/**
	 * 营业执照识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	businessLicense(image : string, options : any): Promise;
		
	/**
	 * 通用票据识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 *   probability 是否返回识别结果中每一行的置信度
	 *   accuracy normal 使用快速服务，1200ms左右时延；缺省或其它值使用高精度服务，1600ms左右时延
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	receipt(image : string, options : any): Promise;
		
	/**
	 * 火车票识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	trainTicket(image : string, options : any): Promise;
		
	/**
	 * 出租车票识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	taxiReceipt(image : string, options : any): Promise;
		
	/**
	 * 表格文字识别同步接口接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	form(image : string, options : any): Promise;
		
	/**
	 * 表格文字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	tableBegin(image : string, options : any): Promise;
		
	/**
	 * 表格识别结果接口
	 * 
	 * @param {string} requestId - 发送表格文字识别请求时返回的request id
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   result_type 期望获取结果的类型，取值为“excel”时返回xls文件的地址，取值为“json”时返回json格式的字符串,默认为”excel”
	 * @return {Promise} - 标准Promise对象
	 * @param requestId 
	 * @param options 
	 * @return  
	 */
	tableGetresult(requestId : string, options : any): Promise;
		
	/**
	 * 增值税发票识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	vatInvoice(image : string, options : any): Promise;
		
	/**
	 * 二维码识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	qrcode(image : string, options : any): Promise;
		
	/**
	 * 数字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 *   detect_direction 是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:<br>- true：检测朝向；<br>- false：不检测朝向。
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	numbers(image : string, options : any): Promise;
		
	/**
	 * 彩票识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	lottery(image : string, options : any): Promise;
		
	/**
	 * 护照识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	passport(image : string, options : any): Promise;
		
	/**
	 * 名片识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	businessCard(image : string, options : any): Promise;
		
	/**
	 * 手写文字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   recognize_granularity 是否定位单字符位置，big：不定位单字符位置，默认值；small：定位单字符位置
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	handwriting(image : string, options : any): Promise;
		
	/**
	 * 自定义模板文字识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   templateSign 您在自定义文字识别平台制作的模板的ID
	 *   classifierId 分类器Id。这个参数和templateSign至少存在一个，优先使用templateSign。存在templateSign时，表示使用指定模板；如果没有templateSign而有classifierId，表示使用分类器去判断使用哪个模板
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	custom(image : string, options : any): Promise;
		
	/**
	 * 
	 * @param image 
	 * @param type 
	 * @param timeout 
	 * @param interval 
	 * @return  
	 */
	tableRecorgnize(image : any, type : any, timeout : number, interval : number): /* AipOcr.prototype.+Promise */ any;
}
declare var AipOcr: AipOcr;
