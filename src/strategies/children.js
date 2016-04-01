import React from 'react'
import {pick, intersection, keys, without} from '../util'

export default function children( context, L, strategies ){
console.log(strategies.dependencies)
  // TODO simple remove width and height or add prefix?
  if( !context.children ) return

  context.children.forEach((child,i)=>{
    const layoutProps = intersection( strategies.dependencies, keys(child.props))
    if( layoutProps.length !==0 && child.type !== L){
      // must remove layout props in child, or may cause infinite loop
      const childProps = without(child.props, layoutProps)
      const clonedChild = React.createElement( child.type,  childProps, child.props.children)
      //debugger
      context.children[i] = React.createElement(L, {...pick(child.props, layoutProps), childWrapper:true}, clonedChild)
    }

  })

}