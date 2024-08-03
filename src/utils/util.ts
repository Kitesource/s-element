/**
 * @description: 深克隆
 * @param {*} obj 
 * @param {*} map 解决循环引用
 * @return {*}
 */
export function cloneDeep(obj: any, map = new WeakMap()) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);

  const objFromMap = map.get(obj)
  if (objFromMap) return objFromMap

  let target: any = {}
  map.set(obj, target)

  if (obj instanceof Map) {
    // Map
    target = new Map()
    obj.forEach((k, v) => {
      const key = cloneDeep(k, map)
      const val = cloneDeep(v, map)
      target.set(key, val)
    })
  } else if (obj instanceof Set) {
    // Set
    target = new Set()
    obj.forEach((item) => {
      target.add(cloneDeep(item, map))
    })
  } else if (obj instanceof Array) {
    // Array
    target = new Array()
    obj.forEach((item) => {
      target.set(cloneDeep(item), map)
    })
  } else {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        target[key] = cloneDeep(obj[key], map);
      }
    }
  }

  return target
}