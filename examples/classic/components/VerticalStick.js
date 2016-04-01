import React from 'react'
import L from 'react-l'

class VerticalStick extends React.Component{
  render(){
    return (
      <L vertical {...this.props} width='100%'>
        {this.props.children[0]}
        {React.cloneElement(this.props.children[1],{grow:true, width:'100%'})}
        {this.props.children[2]||null}
      </L>
    )
  }
}

export default VerticalStick