import {mapValues, forEach, union, map} from './util'


export class Strategies {
  constructor(strategies) {
    this.strategies = mapValues(strategies, strategy=> {
      return ( typeof strategy === 'function') ? new Strategy(strategy) : strategy
    })
    // 拿到所有依赖的 props
    this.dependencies = union( ...map(this.strategies, strategy=>strategy.match !== undefined ? strategy.match.dependencies: [] ) )
    forEach( this.strategies, (strategy,name) =>{
      console.log( name, strategy.match && strategy.match.dependencies)
    })
  }
  forEachMatch( handler, context ){
    forEach( this.strategies, (strategy, name)=>{
      if( strategy.match !== undefined && strategy.match(context) === false ) return
      handler(strategy, name)
    })
  }
}

export class Strategy{
  constructor( handler, match ){
    this.handler = handler
    this.match = match
  }
  apply( ...args ){
    return this.handler(...args)
  }
}

export function andProps( ...props){
  const match = context=>{
    return props.filter(prop=>context.props[prop]!==undefined).length === props.length
  }

  match.dependencies = collectPropDependency( props )
  return match
}

export function orProps(...props){
  const match =  context=>{
    return props.filter(prop=>context.props[prop]!==undefined).length !== 0
  }

  match.dependencies = collectPropDependency( props )
  return match
}

export function collectPropDependency( props ){
  return props.reduce((dependencies, prop)=>{
    return union(dependencies, (typeof props === 'function') ? prop.dependencies : [prop])
  }, [])
}