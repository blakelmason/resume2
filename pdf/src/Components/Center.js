import React from 'react'
import Left from './Left'
import Right from './Right'

function Center() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '28% 72%',
        padding: 36,
        height: '100%'
      }}
    >
      <Left />
      <Right />
    </div>
  )
}

export default Center
