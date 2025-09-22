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

export const PROJECTS: Project[] = [
  {
    name: 'Apparelte',
    description:
      'A creative space for exploring trends, discovering styles, and building unique looks.',
    link: 'https://www.apparelte.com/',
    video:
      'https://res.cloudinary.com/dd8lad1yg/video/upload/v1758403308/Du%CC%88nyan%C4%B1n_neresinde_olursan_ol_stilini_paylas%CC%A7._%EF%B8%8F_Monte_Carlo_vibes_apparelte_outfit_ko_qsutn8.mp4',
    id: 'project1',
  },
  {
    name: 'Korkmaz Elektrik',
    description: 'Showcasing Korkmaz Elektrik’s services and projects in a modern, user-friendly website.',
    link: 'https://korkmazelektrik.tr/',
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
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
