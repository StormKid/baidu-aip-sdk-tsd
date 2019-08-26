// Type definitions for AipBodyAnalysis.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipBodyAnalysis.prototype{
	// AipBodyAnalysis.prototype.commonImpl.!0
	
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
		dynamic : string;
				
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
export declare var BODY_ANALYSIS_PATH : string;

/**
 * 
 */
export declare var BODY_ATTR_PATH : string;

/**
 * 
 */
export declare var BODY_NUM_PATH : string;

/**
 * 
 */
export declare var GESTURE_PATH : string;

/**
 * 
 */
export declare var BODY_SEG_PATH : string;

/**
 * 
 */
export declare var BODY_TRACKING_PATH : string;

/**
 * AipBodyAnalysis类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipBodyAnalysis {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipBodyAnalysis;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipBodyAnalysis.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 人体关键点识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	bodyAnalysis(image : string, options : any): Promise;
		
	/**
	 * 人体属性识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   type gender,<br>age,<br>lower_wear,<br>upper_wear,<br>headwear,<br>glasses,<br>upper_color,<br>lower_color,<br>cellphone,<br>upper_wear_fg,<br>upper_wear_texture,<br>lower_wear_texture,<br>orientation,<br>umbrella,<br>bag,<br>smoke,<br>vehicle,<br>carrying_item,<br>upper_cut,<br>lower_cut,<br>occlusion &#124; 1）可选值说明：<br>gender-性别，<br>age-年龄阶段，<br>lower_wear-下身服饰，<br>upper_wear-上身服饰，<br>headwear-是否戴帽子，<br>glasses-是否戴眼镜，<br>upper_color-上身服饰颜色，<br>lower_color-下身服饰颜色，<br>cellphone-是否使用手机，<br>upper_wear_fg-上身服饰细分类，<br>upper_wear_texture-上身服饰纹理，<br>orientation-身体朝向，<br>umbrella-是否撑伞；<br>bag-背包,<br>smoke-是否吸烟,<br>vehicle-交通工具,<br>carrying_item-是否有手提物,<br>upper_cut-上方截断,<br>lower_cut-下方截断,<br>occlusion-遮挡<br>2）type 参数值可以是可选值的组合，用逗号分隔；**如果无此参数默认输出全部20个属性**
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	bodyAttr(image : string, options : any): Promise;
		
	/**
	 * 人流量统计接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   area 特定框选区域坐标，逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，默认尾点和首点相连做闭合，**此参数为空或无此参数默认识别整个图片的人数**
	 *   show 是否输出渲染的图片，默认不返回，**选true时返回渲染后的图片(base64)**，其它无效值或为空则默认false
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	bodyNum(image : string, options : any): Promise;
		
	/**
	 * 手势识别接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	gesture(image : string, options : any): Promise;
		
	/**
	 * 人像分割接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	bodySeg(image : string, options : any): Promise;
		
	/**
	 * 人流量统计-动态版接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {string} dynamic - true：动态人流量统计，返回总人数、跟踪ID、区域进出人数；<br>false：静态人数统计，返回总人数
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   case_id 任务ID（通过case_id区分不同视频流，自拟，不同序列间不可重复即可）
	 *   case_init 每个case的初始化信号，为true时对该case下的跟踪算法进行初始化，为false时重载该case的跟踪状态。当为false且读取不到相应case的信息时，直接重新初始化
	 *   show 否返回结果图（含统计值和跟踪框渲染），默认不返回，选true时返回渲染后的图片(base64)，其它无效值或为空则默认false
	 *   area 静态人数统计时，只统计区域内的人，缺省时为全图统计。<br>动态人流量统计时，进出区域的人流会被统计。<br>逗号分隔，如‘x1,y1,x2,y2,x3,y3...xn,yn'，按顺序依次给出每个顶点的xy坐标（默认尾点和首点相连），形成闭合多边形区域。<br>服务会做范围（顶点左边需在图像范围内）及个数校验（数组长度必须为偶数，且大于3个顶点）。只支持单个多边形区域，建议设置矩形框，即4个顶点。**坐标取值不能超过图像宽度和高度，比如1280的宽度，坐标值最小建议从1开始，最大到1279**。
	 * @return {Promise} - 标准Promise对象
	 * @param image 
	 * @param dynamic 
	 * @param options 
	 * @return  
	 */
	bodyTracking(image : string, dynamic : string, options : any): Promise;
}
declare var AipBodyAnalysis: AipBodyAnalysis;
