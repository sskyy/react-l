import {Strategy, andProps} from '../Strategy'

export default new Strategy(function display( context ){
    context.style.set('display',context.props.display)
}, andProps('display'))