import assign from 'object-assign'
import {pick} from '../util'
import {Strategy, orProps} from '../Strategy'

export default new Strategy(function size( context ){
  context.style.set(pick(context.props, ['width', 'height']))
  console.info('applying width and height', pick(context.props, ['width', 'height'], true), context.style.data.width.value)
}, orProps('width', 'height'))