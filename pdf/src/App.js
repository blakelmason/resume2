import React from 'react'
import Top from './Components/Top'
import Center from './Components/Center'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 1154,
        width: '8.5in'
        // border: '1px solid black'
        // margin: 40
      }}
    >
      <Top />
      <Center />
    </div>
  )
}

export default App
