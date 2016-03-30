import assign from 'object-assign'
import React from 'react'
import basic from './strategies/basic'
import direction from './strategies/direction'
import whiteSpace from './strategies/whiteSpace'
import Style from './Style'
import {forEach} from './util'
//import size from './strategies/size'
//import position from './strategies/position'
//import childrenSize from './strategies/childrenSize'

// strategy may have dependencies
const strategies = {basic,  direction, whiteSpace}

const L  = React.createClass({
  render(){
    const props = this.props
    const children = props.children

    const context = {
      props, children,
      style:new Style,
      childrenStyle:Array(children.length).fill(1).map(()=>new Style)
    }

    forEach(strategies, (strategy, name)=> {
      context.style.open(name)
      context.childrenStyle.forEach(style=>style.open(name))
      strategy(context)
      context.childrenStyle.forEach(style=>style.close())
      context.style.close()
    })


    // TODO debug mode
    return (
      <div style={context.style.generate()}>
        {children.map((child, i)=>(
          <div key={i} style={context.childrenStyle[i].generate()}>{React.cloneElement(child)}</div>
        ))}
      </div>
    )
  }
})

export default L
