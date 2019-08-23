
const toString = Object.prototype.toString  //缓存

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {

//     return val !== null && typeof val === 'object'
//     // return toString.call(val) === '[object Object]'
// }

export function isPlainObject (val: any): val is Object {
    return toString.call(val) === '[object Object]'
}