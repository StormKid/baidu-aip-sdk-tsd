// Type definitions for AipNlp.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace AipNlp.prototype{
	// AipNlp.prototype.commonImpl.!0
	
	/**
	 * 
	 */
	interface CommonImpl0 {
				
		/**
		 * 
		 */
		content : string;
				
		/**
		 * 
		 */
		max_summary_len : number;
				
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
export declare var LEXER_PATH : string;

/**
 * 
 */
export declare var LEXER_CUSTOM_PATH : string;

/**
 * 
 */
export declare var DEP_PARSER_PATH : string;

/**
 * 
 */
export declare var WORD_EMBEDDING_PATH : string;

/**
 * 
 */
export declare var DNNLM_CN_PATH : string;

/**
 * 
 */
export declare var WORD_SIM_EMBEDDING_PATH : string;

/**
 * 
 */
export declare var SIMNET_PATH : string;

/**
 * 
 */
export declare var COMMENT_TAG_PATH : string;

/**
 * 
 */
export declare var SENTIMENT_CLASSIFY_PATH : string;

/**
 * 
 */
export declare var KEYWORD_PATH : string;

/**
 * 
 */
export declare var TOPIC_PATH : string;

/**
 * 
 */
export declare var ECNET_PATH : string;

/**
 * 
 */
export declare var EMOTION_PATH : string;

/**
 * 
 */
export declare var NEWS_SUMMARY_PATH : string;

/**
 * AipNlp类
 * 
 * @class
 * @extends BaseClient
 * @constructor
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare interface AipNlp {
		
	/**
	 * 
	 * @param appId 
	 * @param ak 
	 * @param sk 
	 * @return  
	 */
	new (appId : any, ak : any, sk : any): AipNlp;
		
	/**
	 * 
	 * @param param 
	 */
	commonImpl(param : AipNlp.prototype.CommonImpl0): /* void */ any;
		
	/**
	 * 词法分析接口
	 * 
	 * @param {string} text - 待分析文本（目前仅支持GBK编码），长度不超过65536字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	lexer(text : string, options : any): Promise<any>;
		
	/**
	 * 词法分析（定制版）接口
	 * 
	 * @param {string} text - 待分析文本（目前仅支持GBK编码），长度不超过65536字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	lexerCustom(text : string, options : any): Promise<any>;
		
	/**
	 * 依存句法分析接口
	 * 
	 * @param {string} text - 待分析文本（目前仅支持GBK编码），长度不超过256字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   mode 模型选择。默认值为0，可选值mode=0（对应web模型）；mode=1（对应query模型）
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	depparser(text : string, options : any): Promise<any>;
		
	/**
	 * 词向量表示接口
	 * 
	 * @param {string} word - 文本内容（GBK编码），最大64字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param word 
	 * @param options 
	 * @return  
	 */
	wordembedding(word : string, options : any): Promise<any>;
		
	/**
	 * DNN语言模型接口
	 * 
	 * @param {string} text - 文本内容（GBK编码），最大512字节，不需要切词
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	dnnlmCn(text : string, options : any): Promise<any>;
		
	/**
	 * 词义相似度接口
	 * 
	 * @param {string} word1 - 词1（GBK编码），最大64字节
	 * @param {string} word2 - 词1（GBK编码），最大64字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   mode 预留字段，可选择不同的词义相似度模型。默认值为0，目前仅支持mode=0
	 * @return {Promise<any>} - 标准Promise对象
	 * @param word1 
	 * @param word2 
	 * @param options 
	 * @return  
	 */
	wordSimEmbedding(word1 : string, word2 : string, options : any): Promise<any>;
		
	/**
	 * 短文本相似度接口
	 * 
	 * @param {string} text1 - 待比较文本1（GBK编码），最大512字节
	 * @param {string} text2 - 待比较文本2（GBK编码），最大512字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   model 默认为"BOW"，可选"BOW"、"CNN"与"GRNN"
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text1 
	 * @param text2 
	 * @param options 
	 * @return  
	 */
	simnet(text1 : string, text2 : string, options : any): Promise<any>;
		
	/**
	 * 评论观点抽取接口
	 * 
	 * @param {string} text - 评论内容（GBK编码），最大10240字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   type 评论行业类型，默认为4（餐饮美食）
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	commentTag(text : string, options : any): Promise<any>;
		
	/**
	 * 情感倾向分析接口
	 * 
	 * @param {string} text - 文本内容（GBK编码），最大102400字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	sentimentClassify(text : string, options : any): Promise<any>;
		
	/**
	 * 文章标签接口
	 * 
	 * @param {string} title - 篇章的标题，最大80字节
	 * @param {string} content - 篇章的正文，最大65535字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param title 
	 * @param content 
	 * @param options 
	 * @return  
	 */
	keyword(title : string, content : string, options : any): Promise<any>;
		
	/**
	 * 文章分类接口
	 * 
	 * @param {string} title - 篇章的标题，最大80字节
	 * @param {string} content - 篇章的正文，最大65535字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param title 
	 * @param content 
	 * @param options 
	 * @return  
	 */
	topic(title : string, content : string, options : any): Promise<any>;
		
	/**
	 * 文本纠错接口
	 * 
	 * @param {string} text - 待纠错文本，输入限制511字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	ecnet(text : string, options : any): Promise<any>;
		
	/**
	 * 对话情绪识别接口接口
	 * 
	 * @param {string} text - 待识别情感文本，输入限制512字节
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   scene default（默认项-不区分场景），talk（闲聊对话-如度秘聊天等），task（任务型对话-如导航对话等），customer_service（客服对话-如电信/银行客服等）
	 * @return {Promise<any>} - 标准Promise对象
	 * @param text 
	 * @param options 
	 * @return  
	 */
	emotion(text : string, options : any): Promise<any>;
		
	/**
	 * 新闻摘要接口接口
	 * 
	 * @param {string} content - 字符串（限200字符数）字符串仅支持GBK编码，长度需小于200字符数（即400字节），请输入前确认字符数没有超限，若字符数超长会返回错误。标题在算法中具有重要的作用，若文章确无标题，输入参数的“标题”字段为空即可
	 * @param {integer} maxSummaryLen - 此数值将作为摘要结果的最大长度。例如：原文长度1000字，本参数设置为150，则摘要结果的最大长度是150字；推荐最优区间：200-500字
	 * @param {Object} options - 可选参数对象，key: value都为string类型
	 * @description options - options列表:
	 *   title 字符串（限200字符数）字符串仅支持GBK编码，长度需小于200字符数（即400字节），请输入前确认字符数没有超限，若字符数超长会返回错误。标题在算法中具有重要的作用，若文章确无标题，输入参数的“标题”字段为空即可
	 * @return {Promise<any>} - 标准Promise对象
	 * @param content 
	 * @param maxSummaryLen 
	 * @param options 
	 * @return  
	 */
	newsSummary(content : string, maxSummaryLen : number, options : any): Promise<any>;
}
declare var AipNlp: AipNlp;
