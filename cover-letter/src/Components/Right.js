import React from 'react'
import Title from './Title'

const data = {
  site: 'procore.com',
  position: 'Demo Engineer',
  company: 'Procore',
  industry: 'construction management and tech industries',
  link: 'https://www.procore.com/jobs/openings/2102210'
}

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Title left>Cover Letter</Title>
      <div style={{}}>Dear Hiring Manager,</div>
      <P>
        I am interested in obtaining full-time employment as a {data.position}{' '}
        at {data.company}. I believe my dependable, personable, and professional
        nature makes me a competitive candidate for this position. My (a)
        experience at U.S. Wheel Corporation and (b) education at BYU, UCI, and
        Hack Reactor have provided me with the skills necessary to succeed at
        this job.
      </P>
      <P>
        <strong>Experience.</strong> As a Business and Technology Specialist at
        U.S. Wheel Corp, I specialized in identifying business problems, and
        providing tech solutions. I worked closely with all business teams to
        optimize current processes, improve systems, and resolve issues. Some
        examples of work I did are automating order entries for U-Haul and
        Summit Racing orders, setting up a SQL database to track drop ship
        orders, and generating bill of materials for the wheel assembly process.
      </P>
      <P>
        <strong>Education.</strong> Through my software engineering programs at
        UCI and Hack Reactor, I have enhanced my ability to think sharply and
        quickly by practicing complicated logic with JavaScript-centered
        technologies. I have also learned how to build, manage, and operate
        MySQL, PostgreSQL, and MongoDB databases. I apply this knowledge in
        business settings to provide simple technology solutions to complicated
        business problems. My degree in business from BYU coupled with my
        certificates from UCI and Hack Reactor give me a powerful toolset that I
        feel would help me thrive as a {data.position}.
      </P>
      <P>
        I am confident my skills as a {data.position} will be valuable to{' '}
        {data.company}, and I would like to further discuss my qualifications.
        Please feel free to contact me by email at blakelmason@gmail.com or by
        phone at (714) 878-5117.
      </P>
      <div style={{ marginBottom: 14 }}>Sincerely,</div>
      <div>Blake Mason</div>
    </div>
  )
}

function P({ children }) {
  return (
    <div
      style={{
        lineHeight: 1.5,
        textJustify: 'inter-word',
        textAlign: 'justify'
      }}
    >
      {children}
    </div>
  )
}

export default Right
