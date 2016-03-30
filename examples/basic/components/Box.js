import React from 'react'

const Box = React.createClass({
  render(){
    return (
      <div style={{ background:this.props.color || 'gray',  display:'inline-block', padding:'25px',color:'#fff',textAlign:'center' }}>
        {this.props.children}
      </div>
    )
  }
})

export default Box

