import React from 'react'

function Title({ children, style, left }) {
  return (
    <div
      style={{
        color: '#4c5867',
        textTransform: 'uppercase',
        letterSpacing: 3,
        borderBottom: '1px solid #9c9c9c',
        lineHeight: 0.75,
        fontWeight: 700,
        textAlign: left ? 'left' : 'center',
        fontSize: 24,
        marginBottom: 16,
        ...style
      }}
    >
      <div style={{ position: 'relative', right: left ? 1.8 : '' }}>
        {children}
      </div>
    </div>
  )
}

export default Title
