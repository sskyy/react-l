import assign from 'object-assign'
import {pick} from '../util'

export default function size( context ){
  // TODO add width with @
  context.style.set(pick(context.props, ['width', 'height'], true))
}