// 深度物件合併
export const mergeDeep = (...objects:object[]) => {
  const isObject = (obj: object) => obj && typeof obj === 'object'

  return objects.reduce((prev:any, obj:any) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal)
      } else { prev[key] = oVal }
    })

    return prev
  }, {})
}

// base64 字串轉 uint8 陣列 (推播訂閱時需使用)
// export const urlBase64ToUint8Array = (base64String) => {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4)
//   const base64 = (base64String + padding)
//     .replace(/\-/g, '+')
//     .replace(/_/g, '/')
//   const rawData = window.atob(base64)
//   const outputArr = new Uint8Array(rawData.length)

//   for (let i = 0; i < rawData.length; ++i)
//     outputArr[i] = rawData.charCodeAt(i)

//   return outputArr
// }
