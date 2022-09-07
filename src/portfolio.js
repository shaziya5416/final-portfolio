const header = {
  // all the properties are optional - can be left empty or deletedz
  title: 'SK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shazia Khan',
  role: 'Full Stack Developer',
  description:
    'Proficient in MERN stack development, passionate about implementing and launching new projects,I have the ability to translate business requirements into technical solutions.Currently I am looking to start my career as an entry-level software engineer with a reputed firm driven by technology.',
  resume: 'https://drive.google.com/file/d/1R6A8zaMY9nU9UCfwh8nJy2bl_Pu-HDMg/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shazia-khan-187a96124/',
    github: 'https://github.com/shaziya5416',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Travel App',
    description:
      'A full-stack travel booking application with JWT and Context-API',
    stack: ['Mongo','Express','React','CSS','React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://bookingcom-kohl.vercel.app',

  },
  {
    name: 'Blog App',
    description:
      'A full-stack blog writing application with CRUD features and Token based authentication',
    stack: ['MongoDB', 'Express','Node','CSS', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://idyllic-malabi-5188b5.netlify.app/',
  },
  
  {
    name: 'Community API',
    description:
      'A RESTFul API with all major features',
    stack: ['Mongo','Express','Node'],
    sourceCode: 'https://github.com/shaziya5416/community_API',
  },
  {
  name: 'LinkedIn clone',
    description:
      'A job-networking application with firebase authentication',
    stack: ['CSS','Redux', 'Firebase', 'React'],
    sourceCode: 'https://github.com/shaziya5416/linkedIn_clone',
    livePreview: 'https://linked-in-clone-ochre.vercel.app/',
  },
  {
    name: 'Image Search App',
    description:
      'An image searching app made in vanilla javascript,consisting of search feature',
    stack: ['Javascript','HTML','CSS'],
    sourceCode: 'https://github.com/shaziya5416/image_Search',
    livePreview: 'https://image-search-zeta.vercel.app/',
  },
  {
    name: 'Flexor',
    description:
      'Flexor is a modern and clean looking free single page, multiple purpose template.',
    stack: ['HTML',"CSS"],
    sourceCode: 'https://github.com/shaziya5416/HTML-CSS-Website',
    livePreview: 'https://html-css-website-murex.vercel.app/',
  },
  // {
  //   name: 'Project 8',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 7',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SCSS',
  'Material UI',
  'Git',
  'Jest',
  'TailwindCSS',
  "Mongo",
  "Express",
  "Node"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shaziya5416@gmail.com',
}

const blog={
  blog:'https://medium.com/@shaziya5416'
}

export { header, about, projects, skills, contact,blog }
