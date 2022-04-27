import _ from 'lodash'

// 比较两个对象差异
export function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = _.isObject(value) && _.isObject(base[key]) ? changes(value, base[key]) : value
      }
    })
  }
  return changes(object, base)
}
// const objectDiff = (obj, base, isDeep = true) => {
//   const keys1 = Object.keys(obj)
//   const keys2 = Object.keys(base)
//   const res = []

//   // 找出删除的，增加的
//   if (keys1.length !== keys2.length) {
//     return
//   }
//   // 找出存在但不同的
//   for (const key in keys1) {
//     const val1 = obj[key]
//     const val2 = base[key]
//   }
// }

// function deepEqual(obj, base) {
//   const keys1 = Object.keys(obj)
//   const keys2 = Object.keys(base)

//   if (keys1.length !== keys2.length) {
//     return false
//   }

//   for (const key of keys1) {
//     const val1 = obj[key]
//     const val2 = base[key]
//     const areObjects = isObject(val1) && isObject(val2)
//     if ((areObjects && !deepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
//       return false
//     }
//   }

//   return true
// }
