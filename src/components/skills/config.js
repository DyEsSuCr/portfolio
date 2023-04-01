import crypto from 'crypto'

import CSS from '../../images/skills/css-logo.webp'
import Django from '../../images/skills/django-logo.png'
import Figma from '../../images/skills/figma-logo.png'
import Git from '../../images/skills/git.png'
import HTML from '../../images/skills/html-logo.png'
import JavaScript from '../../images/skills/js-logo.png'
import MySQL from '../../images/skills/mysql-logo.png'
import NPM from '../../images/skills/npm-logo.png'
import PostgreSQL from '../../images/skills/postgresql-logo.png'
import React from '../../images/skills/react-logo.png'
import RestFramework from '../../images/skills/restframework-logo.webp'
import Sass from '../../images/skills/sass-logo.png'
import Tailwind from '../../images/skills/tailwind-logo.png'
import Python from '../../images/skills/python.png'
import Node from '../../images/skills/node-logo.png'
import Express from '../../images/skills/express-logo.png'
import AWS from '../../images/skills/aws-icon.png'
import Azure from '../../images/skills/azure-icon.png'

export const skills = [
  {
    id: crypto.randomUUID(),
    name: 'Django',
    url: 'https://www.djangoproject.com',
    logo: Django
  },
  {
    id: crypto.randomUUID(),
    name: 'RestFramework',
    url: 'https://www.django-rest-framework.org/',
    logo: RestFramework
  },
  {
    id: crypto.randomUUID(),
    name: 'Node JS',
    url: 'https://nodejs.org/en/',
    logo: Node
  },
  {
    id: crypto.randomUUID(),
    name: 'Express',
    url: 'https://expressjs.com/',
    logo: Express
  },
  {
    id: crypto.randomUUID(),
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    logo: JavaScript
  },
  {
    id: crypto.randomUUID(),
    name: 'React',
    url: 'https://es.reactjs.org/',
    logo: React
  },
  {
    id: crypto.randomUUID(),
    name: 'Python',
    url: 'https://www.python.org/',
    logo: Python
  },
  {
    id: crypto.randomUUID(),
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    logo: MySQL
  },
  {
    id: crypto.randomUUID(),
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    logo: PostgreSQL
  },
  {
    id: crypto.randomUUID(),
    name: 'AWS',
    url: 'https://aws.amazon.com',
    logo: AWS
  },
  {
    id: crypto.randomUUID(),
    name: 'Azure',
    url: 'https://azure.microsoft.com',
    logo: Azure
  },
  {
    id: crypto.randomUUID(),
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    logo: Tailwind
  },
  {
    id: crypto.randomUUID(),
    name: 'Sass',
    url: 'https://sass-lang.com/',
    logo: Sass
  },
  {
    id: crypto.randomUUID(),
    name: 'CSS',
    url: 'https://developer.mozilla.org/es/docs/Web/CSS',
    logo: CSS
  },
  {
    id: crypto.randomUUID(),
    name: 'Git',
    url: 'https://git-scm.com/',
    logo: Git
  },
  {
    id: crypto.randomUUID(),
    name: 'HTML',
    url: 'https://developer.mozilla.org/es/docs/Web/HTML',
    logo: HTML
  },
  {
    id: crypto.randomUUID(),
    name: 'NPM',
    url: 'https://www.npmjs.com/',
    logo: NPM
  },
  {
    id: crypto.randomUUID(),
    name: 'Figma',
    url: 'https://www.figma.com/',
    logo: Figma
  }
]
