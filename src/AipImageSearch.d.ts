// Type definitions for AipImageSearch.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipImageSearch.prototype{
	// AipImageSearch.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
				
		/**
		 * 
		 */
		cont_sign : string;
				
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
export declare var SAME_HQ_ADD_PATH : string;

/**
 * 
 */
export declare var SAME_HQ_SEARCH_PATH : string;

/**
 * 
 */
export declare var SAME_HQ_UPDATE_PATH : string;

/**
 * 
 */
export declare var SAME_HQ_DELETE_PATH : string;

/**
 * 
 */
export declare var SIMILAR_ADD_PATH : string;

/**
 * 
 */
export declare var SIMILAR_SEARCH_PATH : string;

/**
 * 
 */
export declare var SIMILAR_UPDATE_PATH : string;

/**
 * 
 */
export declare var SIMILAR_DELETE_PATH : string;

/**
 * 
 */
export declare var PRODUCT_ADD_PATH : string;

/**
 * 
 */
export declare var PRODUCT_SEARCH_PATH : string;

/**
 * 
 */
export declare var PRODUCT_UPDATE_PATH : string;

/**
 * 
 */
export declare var PRODUCT_DELETE_PATH : string;

/**
 * AipImageSearch类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipImageSearch {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipImageSearch;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipImageSearch.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 相同图检索—入库接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	sameHqAdd(image : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—入库接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	sameHqAddUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—检索接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	sameHqSearch(image : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—检索接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	sameHqSearchUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—更新接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	sameHqUpdate(image : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—更新接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	sameHqUpdateUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—更新接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	sameHqUpdateContSign(contSign : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—删除接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	sameHqDeleteByImage(image : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—删除接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	sameHqDeleteByUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相同图检索—删除接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	sameHqDeleteBySign(contSign : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—入库接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	similarAdd(image : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—入库接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	similarAddUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—检索接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	similarSearch(image : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—检索接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 *   tag_logic 检索时tag之间的逻辑， 0：逻辑and，1：逻辑or
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	similarSearchUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—更新接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	similarUpdate(image : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—更新接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	similarUpdateUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—更新接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   tags 1 - 65535范围内的整数，tag间以逗号分隔，最多2个tag。样例："100,11" ；检索时可圈定分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	similarUpdateContSign(contSign : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—删除接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	similarDeleteByImage(image : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—删除接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	similarDeleteByUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 相似图检索—删除接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	similarDeleteBySign(contSign : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—入库接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。**请注意，检索接口不返回原图，仅反馈当前填写的brief信息，所以调用该入库接口时，brief信息请尽量填写可关联至本地图库的图片id或者图片url、图片名称等信息**
	 *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	productAdd(image : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—入库接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 检索时原样带回,最长256B。**请注意，检索接口不返回原图，仅反馈当前填写的brief信息，所以调用该入库接口时，brief信息请尽量填写可关联至本地图库的图片id或者图片url、图片名称等信息**
	 *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	productAddUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—检索接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	productSearch(image : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—检索接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   class_id1 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   class_id2 商品分类维度1，支持1-60范围内的整数。检索时可圈定该分类维度进行检索
	 *   pn 分页功能，起始位置，例：0。未指定分页时，默认返回前300个结果；接口返回数量最大限制1000条，例如：起始位置为900，截取条数500条，接口也只返回第900 - 1000条的结果，共计100条
	 *   rn 分页功能，截取条数，例：250
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	productSearchUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—更新接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   class_id1 更新的商品分类1，支持1-60范围内的整数。
	 *   class_id2 更新的商品分类2，支持1-60范围内的整数。
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	productUpdate(image : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—更新接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   class_id1 更新的商品分类1，支持1-60范围内的整数。
	 *   class_id2 更新的商品分类2，支持1-60范围内的整数。
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	productUpdateUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—更新接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   brief 更新的摘要信息，最长256B。样例：{"name":"周杰伦", "id":"666"}
	 *   class_id1 更新的商品分类1，支持1-60范围内的整数。
	 *   class_id2 更新的商品分类2，支持1-60范围内的整数。
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	productUpdateContSign(contSign : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—删除接口
	 * 
	 * @param {string} image - 图像数据，base64编码，要求base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param image 
	 * @param options 
	 * @return  
	 */
	productDeleteByImage(image : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—删除接口
	 * 
	 * @param {string} url - 图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param url 
	 * @param options 
	 * @return  
	 */
	productDeleteByUrl(url : string, options : any): Promise<any>;
		
	/**
	 * 商品检索—删除接口
	 * 
	 * @param {string} contSign - 图片签名
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param contSign 
	 * @param options 
	 * @return  
	 */
	productDeleteBySign(contSign : string, options : any): Promise<any>;
}
declare var AipImageSearch: AipImageSearch;
