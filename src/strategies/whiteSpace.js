import assign from 'object-assign'
import {intersection, keys, forEach} from '../util'


export default function direction( context ){
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

  forEach([horizonDict, verticalDict], dict=>{
    const DictKeys = intersection( keys(dict), keys( context.props) )
    if( DictKeys.length > 1 ) throw new Error('Only one Space Property can be set.')
    if( DictKeys.length === 1 ){
      context.style.set({
        display: 'flex',
        justifyContent : dict[DictKeys[0]]
      })
    }
  })
}