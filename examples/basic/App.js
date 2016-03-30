import React from 'react'
import L from 'react-l'
import Box from './components/Box'
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
  render(){
    return (
      <div>

        <h1>direction</h1>
        <h2>vertical</h2>
        <L vertical>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

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

        <h1>layout size</h1>
        <L width='200px' height='200px'>
          <Box color={colors[0]}>A</Box>
          <Box color={colors[1]}>B</Box>
          <Box color={colors[2]}>C</Box>
        </L>

        <h1>children size</h1>

        <h1>children position</h1>

      </div>
    )
  }
})

export default App