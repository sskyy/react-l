import assign from 'object-assign'


export default function direction( context ){
  if( context.props.vertical === true){
    context.style.set({
      display: 'flex',
      flexDirection : 'column'
    })
  }
}