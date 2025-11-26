type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type SkillCategory = {
  name: string
  skills: string[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Apparelte',
    description:
      'A creative space for exploring trends, discovering styles, and building unique looks.',
    link: '/projects/apparelte',
    video:
      'https://res.cloudinary.com/dd8lad1yg/video/upload/v1758403308/Du%CC%88nyan%C4%B1n_neresinde_olursan_ol_stilini_paylas%CC%A7._%EF%B8%8F_Monte_Carlo_vibes_apparelte_outfit_ko_qsutn8.mp4',
    id: 'project1',
  },
  {
    name: 'Korkmaz Elektrik',
    description:
      'Showcasing Korkmaz Elektrik\'s services and projects in a modern, user-friendly website.',
    link: '/projects/korkmaz-elektrik',
    video:
      'https://res.cloudinary.com/dd8lad1yg/video/upload/v1758493351/Siz_hayal_edin_biz_gerc%CC%A7eg%CC%86e_do%CC%88nu%CC%88s%CC%A7tu%CC%88relim_I%CC%87htiyac%CC%A7lar%C4%B1n%C4%B1za_ve_hayallerinize_kavus%CC%A7man%C4%B1z_an_mese_wzi7nk.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Vyrin Lab',
    title: 'Backend Developer & UI/UX Designer',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Software Developer',
    start: '2021',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Race Condition in Django',
    description: 'What is a race condition, how does it occur in Django, and how can you prevent it?',
    link: '/blog/race-condition-in-django',
    uid: 'blog-1',
  },
  {
    title: 'Mastering JWT Authentication in Django Rest Framework: Best Practices and Techniques',
    description:
      'Learn how to implement secure JWT authentication in Django Rest Framework with best practices, tips, and real-world techniques.',
    link: '/blog/mastering-jwt-authentication-in-django-rest-framework',
    uid: 'blog-2',
  },
  {
    title: 'Django Rest Framework: Key Points for RESTful API Development',
    description:
      'Essential tips and key considerations for building robust and scalable RESTful APIs with Django Rest Framework.',
    link: '/blog/django-rest-framework-key-points-for-restful-api-development',
    uid: 'blog-3',
  },
  {
    title: 'Creating Dynamic Links with Django: A Comprehensive Guide',
    description:
      'Step-by-step guide on generating dynamic links in Django to improve flexibility, usability, and SEO performance.',
    link: '/blog/creating-dynamic-links-with-django-comprehensive-guide',
    uid: 'blog-4',
  },  
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/onurmacit',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/onurmaciit',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/onur-macit-b42a19223/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/onuurmacit/',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@onurmaciit',
  },
]

export const EMAIL = 'onurmaciit@email.com'

export const SKILLS: SkillCategory[] = [
  {
    name: 'Backend Frameworks',
    skills: [
      'Django',
      'Django REST Framework',
      'Python',
      'Java',
      'C#',
      'Go (Golang)',
    ],
  },
  {
    name: 'Databases & Caching',
    skills: [
      'PostgreSQL',
      'Redis',
      'SQLite',
      'Query Optimization',
      'Database Indexing',
      'Connection Pooling',
    ],
  },
  {
    name: 'Frontend Technologies',
    skills: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'HTML5',
      'CSS3',
      'Radix UI',
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'Firebase',
      'Docker',
      'Gunicorn',
      'Linux',
      'CI/CD',
      'Jenkins',
    ],
  },
  {
    name: 'Task Processing & APIs',
    skills: [
      'Celery',
      'RESTful APIs',
      'JWT Authentication',
      'OpenAPI 3.0',
      'Swagger',
      'Postman',
      'API Documentation',
    ],
  },
  {
    name: 'Development Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Jira',
      'Slack',
      'Sentry',
      'ESLint',
      'PostCSS',
    ],
  },
  {
    name: 'Architecture & Patterns',
    skills: [
      'Service Pattern',
      'Repository Pattern',
      'Microservices',
      'Modular Architecture',
      'Test-Driven Development',
      'OOP',
      'Functional Programming',
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      'UI/UX Design',
      'Game Development',
      'Desktop Applications',
      'Blockchain',
      'Internationalization',
      'Performance Optimization',
      'Monitoring & Logging',
    ],
  },
]
