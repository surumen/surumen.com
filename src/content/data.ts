import {
  type Stage,
  type Job,
  type Education,
  type ShowCase,
  type Skill,
  type SkillSet,
  State
} from './data_types'

/********
 * State *
 ********/

export const state = new State()

/*********
 * Header *
 *********/

export const myName = 'Moses Surumen'
export const profession = 'Software Engineer'
export const postalCode = 'CA'
export const city = 'San Diego'
export const emails: string[] = ['msurumen@berkeley.edu']
export const socialNetworks: { [key: string]: string } = {
  projects: 'https://projects.surumen.com/',
  github: 'https://github.com/surumen',
  linkedin: 'https://www.linkedin.com/in/mosessurumen'
}

/*********
 * Skills *
 *********/

// Frontend
// Frontend / Logic
export const js: Skill = { level: 1.0, name: 'JavaScript' }
export const backbone: Skill = { level: 0.7, name: 'Backbone.js' }
export const browserify: Skill = { level: 0.8, name: 'Browserify' }
export const jquery: Skill = { level: 1.0, name: 'jQuery' }
export const websockets: Skill = { level: 0.8, name: 'WebSockets' }

// Frontend / Markup
export const haml: Skill = { level: 0.9, name: 'Haml' }
export const handlebars: Skill = { level: 1.0, name: 'Handlebars' }
export const html: Skill = { level: 1.0, name: 'HTML' }
export const php: Skill = { level: 0.7, name: 'PHP' }
export const markdown: Skill = { level: 0.9, name: 'Markdown' }
export const react: Skill = { level: 0.8, name: 'React' }
export const vuejs: Skill = { level: 1.0, name: 'Vue.js' }

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'CSS' }
export const less: Skill = { level: 0.9, name: 'less' }
export const sass: Skill = { level: 0.9, name: 'Sass' }
export const stylus: Skill = { level: 1.0, name: 'Stylus' }
export const svg: Skill = { level: 1.0, name: 'SVG (Animations)' }

// Frontend / Design
export const afterEffects: Skill = { level: 0.3, name: 'After Effects' }
export const blender: Skill = { level: 0.5, name: 'Blender' }
export const sketch: Skill = { level: 0.8, name: 'Sketch' }
export const ui: Skill = { level: 0.7, name: 'User Interface' }
export const ux: Skill = { level: 0.6, name: 'User Experience' }

// Backend
// Backend / CI
export const circleCI: Skill = { level: 0.8, name: 'CircleCI' }
export const jasmine: Skill = { level: 0.9, name: 'Jasmine' }
export const jenkins: Skill = { level: 0.9, name: 'Jenkins' }
export const jest: Skill = { level: 1.0, name: 'Jest' }
export const mocha: Skill = { level: 1.0, name: 'Mocha' }
export const rspec: Skill = { level: 1.0, name: 'RSpec' }
export const travis: Skill = { level: 0.9, name: 'Travis CI' }

// Backend / Code
export const spring: Skill = { level: 1.0, name: 'Spring' }
export const nodejs: Skill = { level: 1.0, name: 'Node.js' }
export const flask: Skill = { level: 1.0, name: 'Flask' }
export const expressjs: Skill = { level: 1.0, name: 'Express.js' }
export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' }
export const asp: Skill = { level: 0.8, name: 'ASP.net' }
export const coffeescript: Skill = { level: 0.9, name: 'CoffeeScript' }
export const meteor: Skill = { level: 1.0, name: 'Meteor' }
export const ruby: Skill = { level: 1.0, name: 'Ruby' }
export const typescript: Skill = { level: 1.0, name: 'TypeScript' }

// Backend / Data
export const api: Skill = { level: 1.0, name: 'API' }
export const apollo: Skill = { level: 1.0, name: 'Apollo GraphQL' }
export const elasticsearch: Skill = { level: 0.7, name: 'elasticsearch' }
export const gql: Skill = { level: 1.0, name: 'GraphQL' }
export const mariadb: Skill = { level: 0.8, name: 'MariaDB' }
export const mysql: Skill = { level: 0.8, name: 'MySQL' }
export const mongodb: Skill = { level: 0.9, name: 'MongoDB' }
export const mssql: Skill = { level: 0.9, name: 'Microsoft SQL' }
export const psql: Skill = { level: 1.0, name: 'PostgreSQL' }
export const redis: Skill = { level: 0.8, name: 'Redis' }

// Backend / Deploy
export const android: Skill = { level: 0.8, name: 'Android' }
export const cordova: Skill = { level: 0.9, name: 'Apache Cordova' }
export const docker: Skill = { level: 0.9, name: 'Docker' }
export const git: Skill = { level: 1.0, name: 'Git' }
export const heroku: Skill = { level: 0.9, name: 'Heroku' }
export const ios: Skill = { level: 0.9, name: 'iOS' }

// API Paradigms
export const graphql: Skill = { level: 0.9, name: 'Apollo GraphQL' }
export const rest: Skill = { level: 0.9, name: 'RESTful APIs' }

// JavaScript Libraries/Frameworks
export const React: Skill = { level: 0.9, name: 'React - Front-end' }
export const Angular: Skill = { level: 1.0, name: 'Angular - Front-end' }
export const Vue: Skill = { level: 0.9, name: 'Vue - Front-end' }
export const Redux: Skill = { level: 0.8, name: 'Redux - State management' }
export const Mobx: Skill = { level: 0.7, name: 'Mobx - State management' }
export const NodeJS: Skill = { level: 0.9, name: 'Node.js - Back-end' }
export const D3js: Skill = { level: 0.7, name: 'D3.js - Data visualization' }
export const ElasticSearch: Skill = { level: 0.7, name: 'Elastic Search' }
export const ReactNative: Skill = { level: 0.8, name: 'React Native - Cross platform apps' }

// AWS
// AWS / Compute
export const beanstalk: Skill = { level: 0.9, name: 'Beanstalk' }
export const ec2: Skill = { level: 0.9, name: 'EC2' }
export const ecs: Skill = { level: 0.8, name: 'ECS' }
export const lambda: Skill = { level: 1.0, name: 'Lambda' }

// AWS / Data
export const aurora: Skill = { level: 1.0, name: 'RDS Aurora' }
export const dynamodb: Skill = { level: 0.8, name: 'DynamoDB' }
export const rds: Skill = { level: 1.0, name: 'DB Service' }
export const s3: Skill = { level: 1.0, name: 'S3' }

// AWS / Flow
export const apigateway: Skill = { level: 0.9, name: 'API Gateway' }
export const cloudfront: Skill = { level: 1.0, name: 'CloudFront' }
export const r53: Skill = { level: 1.0, name: 'Route 53' }
export const sns: Skill = { level: 0.9, name: 'SNS' }

// AWS / Management
export const cloudformation: Skill = { level: 0.9, name: 'CloudFormation' }
export const cloudtrail: Skill = { level: 0.8, name: 'CloudTrail' }
export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' }
export const iam: Skill = { level: 0.9, name: 'IAM' }

export const skills: SkillSet[] = [
  {
    title: 'Frontend',
    data: [
      {
        title: 'Logic',
        data: { backbone, browserify, jquery, js, websockets }
      },
      {
        title: 'Markup',
        data: { haml, handlebars, html, php, markdown, react, vuejs }
      },
      {
        title: 'Style',
        data: { css, less, sass, stylus, svg }
      },
      {
        title: 'Design',
        data: { afterEffects, blender, sketch, ui, ux }
      }
    ]
  },
  {
    title: 'Backend',
    data: [
      {
        title: 'CI',
        data: { circleCI, jasmine, jenkins, jest, mocha, rspec, travis }
      },
      {
        title: 'Code',
        data: { spring, flask, nodejs, asp, meteor, rails, ruby, typescript, expressjs }
      },
      {
        title: 'Data',
        data: { api, apollo, elasticsearch, gql, mariadb, mysql, mongodb, mssql, psql, redis }
      },
      {
        title: 'Deploy',
        data: { android, cordova, docker, git, heroku, ios }
      }
    ]
  },
  {
    title: 'APIs',
    data: { graphql, rest }
  },
  {
    title: 'JavaScript Libraries/Frameworks',
    data: { Angular, React, Vue, NodeJS, Redux, Mobx, D3js, ElasticSearch, ReactNative }
  },
  {
    title: 'AWS',
    data: [
      {
        title: 'Compute',
        data: { beanstalk, ec2, ecs, lambda }
      },
      {
        title: 'Data',
        data: { aurora, dynamodb, rds, s3 }
      },
      {
        title: 'Flow',
        data: { apigateway, cloudfront, r53, sns }
      },
      {
        title: 'Management',
        data: { cloudformation, cloudtrail, cloudwatch, iam }
      }
    ]
  }
]

/*******************
 * Experience *
 *******************/

export const experience: Job[] = [
  {
    company: 'Qualcomm',
    position: `Senior Software Developer`,
    startsAt: new Date('2019-08-19'),
    endsAt: undefined,
  }
]

/*******************
 * Education *
 *******************/

export const education: Education[] = [
  {
    university: 'University of California, Berkeley',
    courses: `
      Machine Learning - CS189,
      Operating Systems - CS162,
      Artificial Intelligence - CS188,
      Network Analysis - CS194,
      Advanced Algorithms - CS170,
      Computer Architecture - CS61C,
      Data Structures and Algorithms - CS61B,
      Structure and Interpretation of Computer Programs - CS61A,
      Discrete Redux and Probability - CS70,
      Designing Information Devices and Systems - EE16A & EE16B,
      Human-Centered Design - DES INV 91,
      Technology Entrepreneurship - IND ENG 191,
      Berkeley Method of Entrepreneurship Bootcamp - IND ENG 192,
      Human Contexts and Ethics of Data - STS 100
      .
    `,
    graduation: new Date('2019-05-18'),
    major: 'BSc. Electrical Engineering and Computer Science',
    activities: [
      'Big Ideas @ Berkeley',
      'MasterCard Foundation Scholars Program',
      'Computer Science Scholars',
      'Cal Hacks',
      'The Berkeley Project - community service club'
    ]
  }
]

/***********
 * Projects *
 ***********/

export const projects: ShowCase[] = [
  {
    name: 'Mixtape GPT',
    description: `
      A music recommendation system built from a weighted network of one million songs.
    `,
    startsAt: new Date('2018'),
    endsAt: undefined,
    urls: ['https://surumen.github.io/mixtape/'],
    media: [],
    skills: {
      expressjs,
      nodejs,
      lambda,
      typescript,
      stylus,
      html,
      vuejs
    }
  },
  {
    name: 'Face Swap',
    description: `
      A Django powered web app that allows users to upload photos and swap faces.
    `,
    startsAt: new Date('2019'),
    endsAt: undefined,
    urls: ['https://github.com/surumen/faceswap/'],
    media: [],
    skills: {}
  },
  {
    name: 'Image Classifier',
    description: `
      A parallelized implementation of a convolution neural network to speed up
      training and testing of an image classifer by 98%.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: ['https://github.com/surumen/image-classifier/'],
    media: [],
    skills: {}
  },
  {
    name: 'Chess.ai',
    description: `
      Chess web player that supports a human player against an intelligent machine player.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: ['https://github.com/surumen/chess-ai/'],
    media: [],
    skills: {}
  }
]
