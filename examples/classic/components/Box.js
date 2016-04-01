import React from 'react'

const Box = React.createClass({
  render(){
    return (
      <div style={{ display:'inline-block',background:this.props.color || 'gray',  padding:'25px',color:'#fff',textAlign:'center' }}>
        {this.props.children}
      </div>
    )
  }
})

export default Box

