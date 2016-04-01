/**
 * TODO 为了支持 [Position] 和 [Size] 的 @功能, 必须实现组件在 dom 渲染后再更新样式.
 * 可以在 style 中先记录 @ 的依赖,然后在相应被依赖的组件 componentDidMount 之后开始解析依赖.
 */

import assign from 'object-assign'
import React from 'react'
import debug from './strategies/debug'
import basic from './strategies/basic'
import direction from './strategies/direction'
import whiteSpace from './strategies/whiteSpace'
import Style from './Style'
import {forEach} from './util'
import size from './strategies/size'
import children from './strategies/children'
import display from './strategies/display'
import grow from './strategies/grow'
import {Strategies} from './Strategy'

// strategy may have dependencies

class L  extends React.Component{
  constructor(){
    super()
    this.strategies = new Strategies({basic,  debug, direction, whiteSpace,  size, display, children, grow})
  }
  render(){
    const props = this.props
    const isChildrenArray = Array.isArray(props.children)
    const children = isChildrenArray ? props.children:[props.children]

    const context = {
      props, children,
      style:new Style,
      childrenStyle:Array(children.length).fill(1).map(()=>new Style)
    }

    this.strategies.forEachMatch((strategy, name)=> {
      context.style.open(name)
      context.childrenStyle.forEach(style=>style.open(name))
      strategy.apply(context, L, this.strategies)
      context.childrenStyle.forEach(style=>style.close())
      context.style.close()
      console.info("applying====>", name)
    }, context)

    // TODO we use isChildrenSingle to quick fix height !00%
    const childrenNodes = context.children.map((child, i)=> {
      return child.type === L  || this.props.childWrapper ===true ?
        child :
        (
          <div key={i} style={context.childrenStyle[i].generate()}>
            {child}
          </div>
        )
    })

    return (
      <div style={context.style.generate()}>
        {childrenNodes}
      </div>
    )
  }
}

export default L
