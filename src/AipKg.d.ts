// Type definitions for AipKg.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipKg.prototype{
	// AipKg.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
				
		/**
		 * 
		 */
		id : number;
				
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
export declare var CREATE_TASK_PATH : string;

/**
 * 
 */
export declare var UPDATE_TASK_PATH : string;

/**
 * 
 */
export declare var TASK_INFO_PATH : string;

/**
 * 
 */
export declare var TASK_QUERY_PATH : string;

/**
 * 
 */
export declare var TASK_START_PATH : string;

/**
 * 
 */
export declare var TASK_STATUS_PATH : string;

/**
 * AipKg类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipKg {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipKg;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipKg.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 创建任务接口
	 * 
	 * @param {string} name - 任务名字
	 * @param {string} templateContent - json string 解析模板内容
	 * @param {string} inputMappingFile - 抓取结果映射文件的路径
	 * @param {string} outputFile - 输出文件名字
	 * @param {string} urlPattern - url pattern
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   limit_count 限制解析数量limit_count为0时进行全量任务，limit_count&gt;0时只解析limit_count数量的页面
	 * @return {Promise} - 标准Promise对象
	 * @param name 
	 * @param templateContent 
	 * @param inputMappingFile 
	 * @param outputFile 
	 * @param urlPattern 
	 * @param options 
	 * @return  
	 */
	createTask(name : string, templateContent : string, inputMappingFile : string, outputFile : string, urlPattern : string, options : any): Promise;
		
	/**
	 * 更新任务接口
	 * 
	 * @param {integer} id - 任务ID
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   name 任务名字
	 *   template_content json string 解析模板内容
	 *   input_mapping_file 抓取结果映射文件的路径
	 *   url_pattern url pattern
	 *   output_file 输出文件名字
	 * @return {Promise} - 标准Promise对象
	 * @param id 
	 * @param options 
	 * @return  
	 */
	updateTask(id : number, options : any): Promise;
		
	/**
	 * 获取任务详情接口
	 * 
	 * @param {integer} id - 任务ID
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param id 
	 * @param options 
	 * @return  
	 */
	getTaskInfo(id : number, options : any): Promise;
		
	/**
	 * 以分页的方式查询当前用户所有的任务信息接口
	 * 
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   id 任务ID，精确匹配
	 *   name 中缀模糊匹配,abc可以匹配abc,aaabc,abcde等
	 *   status 要筛选的任务状态
	 *   page 页码
	 *   per_page 页码
	 * @return {Promise} - 标准Promise对象
	 * @param options 
	 * @return  
	 */
	getUserTasks(options : any): Promise;
		
	/**
	 * 启动任务接口
	 * 
	 * @param {integer} id - 任务ID
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param id 
	 * @param options 
	 * @return  
	 */
	startTask(id : number, options : any): Promise;
		
	/**
	 * 查询任务状态接口
	 * 
	 * @param {integer} id - 任务ID
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise} - 标准Promise对象
	 * @param id 
	 * @param options 
	 * @return  
	 */
	getTaskStatus(id : number, options : any): Promise;
}
declare var AipKg: AipKg;
