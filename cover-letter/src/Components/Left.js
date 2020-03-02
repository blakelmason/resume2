import React from 'react'
// import image from '../image.jpg'
import Title from './Title'
import react from './icons/react.png'
import node from './icons/node.png'
import redux from './icons/redux.png'
import mongo from './icons/mongo.png'
import mysql from './icons/mysql.png'
import pg from './icons/pg.png'
import bootstrap from './icons/bootstrap.png'
import webpack from './icons/webpack.png'
import jwt from './icons/jwt.png'
import aws from './icons/aws.png'
import docker from './icons/docker.png'
import cell from './icons/cell.png'
import linkedin from './icons/linkedin.png'
import website from './icons/website.png'
import github from './icons/github.png'
import gmail from './icons/gmail.png'
import location from './icons/location.png'
import puppeteer from './icons/puppeteer.png'
import sass from './icons/sass.png'
import graphql from './icons/graphql.png'
import js from './icons/js.png'
import mui from './icons/mui.png'
import html from './icons/html.png'
import css from './icons/css.png'
import excel from './icons/excel.png'
import vba from './icons/vba.png'
import sql from './icons/sql.png'
import mongoose from './icons/mongoose.png'
import sequelize from './icons/sequelize.png'
import moment from './icons/moment.png'
import jquery from './icons/jquery.png'
import cheerio from './icons/cheerio.png'

const contact = [
  { icon: cell, data: '714 - 878 - 5117' },
  {
    icon: gmail,
    data: 'blakelmason@gmail.com'
  },
  {
    icon: location,
    data: 'Port Hueneme, CA 93041',
    url:
      'https://www.google.com/maps/place/Port+Hueneme,+CA/@34.1593617,-119.2212506,14z/data=!3m1!4b1!4m5!3m4!1s0x80e84b007fdaca29:0x48333ac255857a54!8m2!3d34.1477829!4d-119.1951074'
  },

  {
    icon: linkedin,
    data: 'LinkedIn',
    url: 'https://www.linkedin.com/in/blakelmason/'
  },
  { icon: website, data: 'Website', url: 'http://www.blakelmason.com/' },
  { icon: github, data: 'Github', url: 'https://github.com/blakelmason' }
]

const skills = [
  {
    name: 'HTML',
    url: 'https://www.w3schools.com/html/',
    icon: html
  },
  {
    name: 'CSS',
    url: 'https://www.w3schools.com/css/',
    icon: css
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: js
  },
  { name: 'React', url: 'https://reactjs.org/', icon: react },
  { name: 'Redux', url: 'https://redux.js.org/', icon: redux },
  { name: 'Node', url: 'https://nodejs.org/en/', icon: node },
  { name: 'MongoDB', url: 'https://www.mongodb.com/', icon: mongo },
  { name: 'SQL', url: 'https://www.w3schools.com/sql/', icon: sql },
  { name: 'Mongoose', url: 'https://mongoosejs.com/', icon: mongoose },
  { name: 'Sequelize', url: 'https://sequelize.org/', icon: sequelize },
  { name: 'MySQL', url: 'https://www.mysql.com/', icon: mysql },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: pg },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon: bootstrap },
  { name: 'Sass', url: 'https://sass-lang.com/', icon: sass },
  { name: 'Material-UI', url: 'https://material-ui.com/', icon: mui },
  { name: 'AWS', url: 'https://aws.amazon.com/', icon: aws },
  { name: 'Webpack', url: 'https://webpack.js.org/', icon: webpack },
  { name: 'JWT', url: 'https://jwt.io/', icon: jwt },
  { name: 'Docker', url: 'https://www.docker.com/', icon: docker },
  {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    icon: graphql
  },
  {
    name: 'jQuery',
    url: 'https://jquery.com/',
    icon: jquery
  },
  {
    name: 'Cheerio',
    url: 'https://cheerio.js.org/',
    icon: cheerio
  },
  {
    name: 'Puppeteer',
    url: 'https://developers.google.com/web/tools/puppeteer',
    icon: puppeteer
  },
  {
    name: 'Moment',
    url: 'https://momentjs.com/',
    icon: moment
  },
  {
    name: 'Microsoft Excel',
    url: 'https://products.office.com/en-us/excel',
    icon: excel
  },
  {
    name: 'VBA',
    url:
      'https://docs.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office',
    icon: vba
  }
]

function Left() {
  return (
    <div
      style={{
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* <div
        style={{
          padding: 4,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <img
          src={image}
          target="_blank"
          rel="noopener noreferrer"
          alt="ya"
          style={{
            borderRadius: '50%',
            border: '1px solid #e2e5e9',
            width: '85%',
            height: 'auto',
            boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
          }}
        />
      </div> */}
      <div
        style={{
          lineHeight: 1.4,
          textAlign: 'justify',
          textJustify: 'inter-word'
        }}
      >
        <Title>Hello</Title>
        {/* <div>
          I love building applications and writing code! I find web technologies
          exciting and enjoy learning new ones. My experience is with JavaScript
          frameworks, and I strive to put my efforts toward ideas that can make
          the world a better place.
        </div> */}
        <div style={{ fontSize: 12 }}>
          I help provide solutions to business operations using technology.
          Whatever the need, I strive to find the optimal solution in a world
          where modern technology is constantly changing and moving forward.
          Whether automating routine tasks, optimizing reporting, or even
          helping a coworker with their temperamental printer, I love helping
          people navigate the complex environment of technology in which we
          live.
        </div>
      </div>
      <div>
        <Title>Contact</Title>
        {contact.map(({ icon, data, url }, i) => (
          <div key={`contact-${i}`} style={{ marginTop: 4, fontSize: 12 }}>
            {url ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#363f49',
                  padding: 6,
                  paddingRight: 8,
                  textDecoration: 'none'
                }}
                href={url}
              >
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    height: 'auto',
                    width: 16,
                    marginRight: 6
                  }}
                />
                {data}
              </a>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#363f49',
                  padding: 6,
                  paddingRight: 8,
                  textDecoration: 'none'
                }}
              >
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    height: 'auto',
                    width: 16,
                    marginRight: 6
                  }}
                />
                {data}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <Title>Skills</Title>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {skills.map(({ name, url, icon }, i) => (
            <div key={`skill-${i}`} style={{ padding: 2, fontSize: 11 }}>
              <div style={{ display: 'inline-block' }}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#363f49',
                    borderRadius: 4,
                    padding: 4,
                    paddingRight: 8,
                    textDecoration: 'none',
                    border: '1px solid #4c5867'
                  }}
                >
                  <img
                    src={icon}
                    alt="icon"
                    style={{
                      height: 'auto',
                      width: 16,
                      marginRight: 6,
                      borderRadius:
                        icon === jwt || name === 'MongoDB' || name === 'Cheerio'
                          ? '50%'
                          : '',
                      border: name === 'MongoDB' ? '1px solid #5555' : ''
                    }}
                  />
                  {name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Left
