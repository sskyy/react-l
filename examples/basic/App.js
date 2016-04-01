import React from 'react'
import L from 'react-l'
import Box from './components/Box'
import Block from './components/Block'
import Please from 'pleasejs'

const colors = Please.make_scheme({
  h: 130,
  s: .7,
  v: .75
}, {
  scheme_type: 'tri',
  format: 'rgb-string'
});



const App = React.createClass({
  direction(){
    return (
      <div>
        <h1>direction</h1>
        <h2>vertical</h2>
        <L vertical>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>
      </div>
    )
  },
  whiteSpace(){
    return (
      <div>
        <h1>white-space</h1>
        <h2>spaceLeft</h2>
        <L spaceLeft>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

        <h2>spaceHorizonEnd</h2>
        <L spaceHorizonEnd>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

        <h2>spaceAround</h2>
        <L spaceAround>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

        <h2>spaceVerticalEnd</h2>
        <L spaceVerticalEnd height='200px'>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

      </div>
    )
  },
  layoutSize(){
    return (
        <div>
          <h1>layout size</h1>
          <h2>width and height</h2>
          <L width='200px' height='200px'>
            <Box color={colors[0]}>A</Box>
            <Box color={colors[1]}>B</Box>
            <Box color={colors[2]}>C</Box>
          </L>
        </div>
      )
  },
  childrenSize(){
    return (
      <div>
        <h1>children size</h1>
        <h2>normal children size</h2>
        <L>
          <Block color={colors[0]} width='100px' height='100px'>A</Block>

        </L>
      </div>
    )
  },
  cascade(){
    return (
      <div>
        <h1>cascade</h1>
        <h2>size and vertical center compose</h2>
        <L>
          <Block color={colors[0]} width='100px' height='100px'>A</Block>
          <L height='200px' width='300px' spaceVerticalEnd>
            <Block color={colors[1]} width='200px' height='100px'>B</Block>
            <Block color={colors[2]} width='150px' height='100px'>C</Block>
          </L>
        </L>
      </div>
    )
  },
  grow(){
    return (
      <div>
        <h1>grow</h1>
        <h2>horizontal grow</h2>
        <L>
          <Block color={colors[0]} height='100px' width='100px'>A</Block>
          <Block color={colors[1]} height='100px' grow>B</Block>
          <Block color={colors[2]} height='100px' width='100px'>C</Block>
        </L>

        <h2>vertical grow</h2>
        <L vertical height='800px' width='500px'>
          <Block color={colors[0]} height='100px' >A</Block>
          <Block color={colors[1]} grow>B</Block>
          <Block color={colors[2]} height='100px'>C</Block>
        </L>
      </div>
    )
  },
  render(){
    return (
      <div>
        {this.direction()}
        {this.whiteSpace()}
        {this.layoutSize()}
        {this.childrenSize()}
        {this.cascade()}
        {this.grow()}
      </div>
    )
  }
})

export default App