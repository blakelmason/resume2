import React from 'react'

function Top() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          background: '#4c5867',
          color: 'white',
          padding: '40px 0px 40px 0px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            lineHeight: 0.75,
            width: 320,
            borderBottom: '1px solid #c6cdd2',
            fontWeight: 600,
            letterSpacing: 4,
            fontSize: 28,
            wordSpacing: 6,
            margin: 'auto'
          }}
        >
          <div style={{ textAlign: 'right', paddingRight: 8 }}>BLAKE</div>
          <div style={{ textAlign: 'left', paddingLeft: 8 }}>MASON</div>
        </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 3,
            wordSpacing: 0,
            lineHeight: 1.2,
            flexGrow: 1
          }}
        >
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            Business and Technology Specialist
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
