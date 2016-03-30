import React from 'react'
import L from 'react-l'
import Box from './components/Box'

const App = React.createClass({
  render(){
    return (
      <div>

        <h1>direction</h1>
        <h2>vertical</h2>
        <L vertical>
          <Box color='red'>A</Box>
          <Box color='blue'>B</Box>
          <Box color='green'>C</Box>
        </L>

        <h1>white-space</h1>
        <h2>spaceLeft</h2>
        <L spaceLeft>
          <Box color='red'>A</Box>
          <Box color='blue'>B</Box>
          <Box color='green'>C</Box>
        </L>

        <h2>spaceHorizonEnd</h2>
        <L spaceHorizonEnd>
          <Box color='red'>A</Box>
          <Box color='blue'>B</Box>
          <Box color='green'>C</Box>
        </L>

        <h2>spaceAround</h2>
        <L spaceAround>
          <Box color='red'>A</Box>
          <Box color='blue'>B</Box>
          <Box color='green'>C</Box>
        </L>

        <h1>layout size</h1>

        <h1>children size</h1>

        <h1>children position</h1>

      </div>
    )
  }
})

export default App