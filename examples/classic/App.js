import React from 'react'
import L from 'react-l'
import Box from './components/Box'
import Block from './components/Block'
import Please from 'pleasejs'
import VerticalStick from './components/VerticalStick'

const colors = Please.make_scheme({
  h: 130,
  s: .7,
  v: .75
}, {
  scheme_type: 'tri',
  format: 'rgb-string'
});


const App = React.createClass({
  render(){
    return (
      <VerticalStick height='100%'>
        <Block height='50px' color={colors[0]}>Header</Block>
        <div style={{height:'1000px', width:'100%', backgroundColor:colors[1]}}>Content</div>
        <Block height='50px' color={colors[2]}>Footer</Block>
      </VerticalStick>
    )
  }
})

export default App