import assign from 'object-assign'

export default function basic( context ){
  context.childrenStyle.forEach(style=>style.set({display:'inline-block'}))
}