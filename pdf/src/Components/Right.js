import React from 'react'
import Title from './Title'
import Experience from './Experience'

const experiences = [
  {
    company: 'US Wheel Corp',
    position: 'business and technology specialist',
    date: '2017 - 2019',
    data: [
      'Liaison between business operations and technology. Wrote code using Excel VBA to automate and improve business activities such as invoicing, shipping, data analysis, and order entry. Built a custom application with a SQL server for managing freight and drop ship orders. Performed IT troubleshooting and managed relationships for any outsourced technology solutions.'
    ],
    description: 'Steel wheel assembly and tire distribution'
  }
]

const educations = [
  {
    company: 'Hack Reactor',
    position: 'Software Engineering Immersive',
    date: '2020',
    data: [
      'Worked on mastering full stack JavaScript and Computer Science fundamentals while exploring new tech using the most refined, up-to-date curriculum.'
    ],
    description:
      'An advanced coding bootcamp focused on building autonomous software engineers ready for any job in the tech industry'
  },
  {
    company: 'University of California, Irvine',
    position: 'Web Development Bootcamp',
    date: '2018',
    data: [
      'Completed complex projects and received hands-on programming training through experiential learning opportunities.'
    ],
    description:
      'A web development program that teaches the key skills for full stack development'
  },
  {
    company: 'Brigham Young University, Utah',
    position: "Bachelor's Degree - Business Management",
    date: '2017',
    data: []
  }
]

const projects = [
  {
    company: 'Hack Reactor',
    position: 'Front End Capstone',
    data: [
      "Built an exact copy of a single product page from IKEA's website from scratch using a JavaScript based framework. Used a microservice architecture to coordinate the display of multiple React components on a single page."
    ]
  },
  {
    company: 'Hack Reactor',
    position: 'System Design Capstone',
    data: [
      'Hosted a front end capstone project on AWS EC2 free tier instances and designed a system to maximize application load. Split the proxy, services, and database to individual EC2 instances and configured a load balancer using NGINX.'
    ]
  }
]

function Right() {
  return (
    <div
      style={{
        borderLeft: '1px solid #4c5867',
        paddingLeft: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <Title left>Experience</Title>
        {experiences.map((data, i) => (
          <Experience
            key={`experience-${i}`}
            {...data}
            nm={i === experiences.length - 1}
          />
        ))}
      </div>
      <div>
        <Title left>Education</Title>
        {educations.map((data, i) => (
          <Experience
            key={`education-${i}`}
            {...data}
            nm={i === educations.length - 1}
          />
        ))}
      </div>
      <div>
        <Title left>Projects</Title>
        {projects.map((data, i) => (
          <Experience
            key={`project-${i}`}
            {...data}
            nm={i === projects.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

export default Right
