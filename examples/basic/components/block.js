import React from 'react'

const Block = React.createClass({
  render(){
    return (
      <div style={{ height:'100%', width:'100%',background:this.props.color || 'gray',color:'#fff',textAlign:'center' }}>
        {this.props.children}
      </div>
    )
  }
})


export default Block

