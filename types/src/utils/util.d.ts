/**
 * @description: 深克隆
 * @param {*} obj
 * @param {*} map 解决循环引用
 * @return {*}
 */
export declare function cloneDeep(obj: any, map?: WeakMap<object, any>): any;
