import assign from 'object-assign'
import {Strategy, andProps} from '../Strategy'


export default new Strategy(function direction( context ){
    context.style.set({
      display: 'inline-flex',
      flexDirection : 'column'
    })
}, andProps('vertical'))