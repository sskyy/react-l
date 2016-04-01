import React from 'react'
import {Strategy, andProps} from '../Strategy'

export default new Strategy(function grow( context ){

  context.style.set({
    flexGrow : context.props.grow === true ? 1 :  context.props.grow,
    overflow : 'scroll'
  })

}, andProps('grow'))