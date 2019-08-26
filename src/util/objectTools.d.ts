// Type definitions for objectTools.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace mergeTool{
	// mergeTool.merge.!ret
	
	/**
	 * 
	 */
	interface MergeRet {
	}
}
declare namespace mergeTool{
	// mergeTool.ensureArray.!0
	type EnsureArray0 = Array<any>;
}

/**
 * Copyright (c) 2017 Baidu.com, Inc. All Rights Reserved
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 * 
 * @file objectTool
 * @author baiduAip
 */
declare namespace mergeTool{
		
	/**
	 * 
	 * @param source 
	 * @param dest 
	 * @return  
	 */
	function merge(source : any, dest : any): mergeTool.MergeRet;
		
	/**
	 * 
	 * @param arrayLike 
	 * @return  
	 */
	function ensureArray(arrayLike : mergeTool.EnsureArray0): Array</*!0*/ any>;
		
	/**
	 * 
	 * @param obj 
	 * @return  
	 */
	function isArray(obj : any): boolean;
		
	/**
	 * 
	 * @param obj 
	 * @return  
	 */
	function isObject(obj : any): boolean;
		
	/**
	 * 
	 * @param obj 
	 * @return  
	 */
	function isFunction(obj : any): boolean;
}
