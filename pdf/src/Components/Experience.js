import React from 'react'

function Experience({ company, position, date, data, description, nm }) {
  console.log(nm)
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          fontSize: 28,
          marginRight: 10,
          position: 'relative',
          bottom: 5
        }}
      >
        •
      </div>
      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-bottom',
            marginBottom: 4
          }}
        >
          <div style={{ fontWeight: 500, fontSize: 18 }}>{company}</div>
          <div style={{ color: '#6c757d', position: 'relative', top: 2 }}>
            {date}
          </div>
        </div>
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 18,
            color: '#4c5867',
            fontWeight: 700,
            marginBottom: 4
          }}
        >
          {position}
        </div>
        {description && (
          <div
            style={{
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#6c757d',
              fontSize: 12
            }}
          >
            {description}
          </div>
        )}
        {data.map((item, i) => (
          <div
            style={{
              marginTop: 4,
              lineHeight: 1.4,
              textAlign: 'justify',
              textJustify: 'inter-word',
              marginBottom: nm ? 0 : 28
            }}
            key={`company-data-${i}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
