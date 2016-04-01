export function forEach( obj, fn ){
  return Object.keys( obj ).forEach(key=>{
    return fn( obj[key], key)
  })
}


export function compose( fnA, fnB){
  return function( ...arg){
    fnA && fnA(...arg)
    fnB && fnB(...arg)
  }
}

export function mapValues(obj, handler){
  const result = {}
  Object.keys( obj).forEach(key=>{
    result[key] = handler(obj[key], key)
  })
  return result
}

//export function intersection( ...arrays ){
//  let result= []
//  arrays[0].forEach(item=>{
//    if( arrays[1].indexOf(item) !== -1 ){
//      result.push(item)
//    }
//  })
//  if( arrays.length > 2 ){
//    result =  intersection(result, ...arrays.slice(2) )
//  }
//  return result
//}

export function zip( keys, values ){
  const result = {}
  keys.forEach( (key, index)=>{
    result[key] = values[index]
  })
  return result
}

export function keys( ...objects ){
  return objects.reduce((result,item)=>result.concat(Object.keys(item)), [])
  //return Object.keys(objects[0])
}

export function pick( obj, keys, ignoreUndefined ){
  const result  = {}
  keys.forEach(key=>{
    if( !ignoreUndefined || obj[key] !== undefined ) result[key] = obj[key]
  })
  return result
}

export function intersection( a, b, ...rest ){
  return b === undefined ? a : intersection(a.filter(item=>b.indexOf(item)!==-1), ...rest)
}

export function union( a, b, ...rest){
  return b === undefined ? a : union(b.reduce((result,item)=>a.indexOf(item)===-1?result.concat(item):result,a), ...rest)
}

export function extract( a, b ){
  return a.filter( item=>b.indexOf(item)===-1)
}

export function map( obj, handler ){
  return Object.keys(obj).map( key=> handler(obj[key],key))
}


export function without(obj, keyToDelete){
  return pick( obj, extract(keys(obj), keyToDelete))
}