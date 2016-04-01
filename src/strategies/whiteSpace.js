import assign from 'object-assign'
import {intersection, keys, forEach} from '../util'
import {Strategy, orProps} from '../Strategy'

const horizonDict = {
  spaceLeft: 'flex-end',
  spaceRight: 'flex-start',
  spaceAround : 'space-around',
  spaceBetween : 'space-between',
  spaceHorizonEnd: 'center'
}

const verticalDict={
  spaceTop : 'flex-start',
  spaceBottom : 'flex-end',
  spaceVerticalEnd : 'center'
}

export default new Strategy(function direction( context ){
  // TODO align-content?
  forEach({justifyContent:horizonDict, alignItems:verticalDict}, (dict, styleAttr)=>{
    const DictKeys = intersection( keys(dict), keys( context.props) )
    if( DictKeys.length > 1 ) throw new Error('Only one Space Property can be set.')
    if( DictKeys.length === 1 ){
      context.style.set({
        display: 'inline-flex',
        [styleAttr]: dict[DictKeys[0]]
      })
    }
  })
}, orProps(...keys(horizonDict, verticalDict) ))