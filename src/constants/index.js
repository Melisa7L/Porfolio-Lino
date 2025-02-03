import { 
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  power,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  django,

  coverhunt,
  dcc,
  kelhel,
  python,
  microverse,
} from '../assets';
import { FaBrain } from 'react-icons/fa';

export const navLinks = [
  {
    id: 'inicio',
    title: 'Inicio',
  },
  {
    id: 'about',
    title: 'Sobre mí',
  },
  {
    id: 'tecnologias',
    title: 'Tecnologias',
  },
  {
    id: 'projects',
    title: 'Proyectos',
  },
  {
    id: 'aprendizaje',
    title: 'Aprendizaje',
  },

];

const services = [
  {
    title: 'Machine Learning',
    icon: frontend,
  },
  {
    title: 'Big Data',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Testing',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Power BI',
    icon: power,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Django',
    icon: django,
  },
];

const experiences = [
  
  // Cursos
  {
    title: 'CURSO DE MICROSOFT ACCESS',
    company_name: 'Punto Digital',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Enero 2018- Marzo 2018',
  },
  {
    title: 'CURSO DE INTRODUCCION AL DESARROLLO WEB',
    company_name: 'Universidad de los Andes Colombia',
    icon: microverse,
    iconBg: '#333333',
    date: '30 de octubre 2021',
  },
  {
    title: 'CURSO DE SECRETARIADO CONTABLE INFORMATICO',
    company_name: 'Punto Digital',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Agosto 2021- Diciembre 2021',
  },
  {
    title: 'CURSO DE BIG DATA',
    company_name: 'Programa Codo a Codo',
    icon: dcc,
    iconBg: '#333333',
    date: 'Julio 2022',
  },
  {
    title: 'CURSO DE ORACLE (PROGRAMA NEXT EDUCACION)-BACKEND',
    company_name: 'Alura Latam',
    icon: coverhunt,
    iconBg: '#333333',
    date: '02/04/2023 al 23/08/2023',
  },
  {
    title: 'CURSO FORMACION LIDER DE TESTING',
    company_name: 'Universidad Tecnologica Nacional',
    icon: microverse,
    iconBg: '#333333',
    date: 'Agosto de 2023',
  },
  {
    title: 'CURSO DE INGLES EN CUI-UBA',
    company_name: 'Centro Universitario de Idiomas',
    icon: kelhel,
    iconBg: '#333333',
    date: '2023',
  },
  {
    title: 'CURSO UDEMY:"REACT-LA GUIA COMPLETA:HOOKS CONTEXT REDUX MERN+15 APPS"',
    company_name: 'Udemy',
    icon: dcc,
    iconBg: '#333333',
    date: '2024',
  },

  {
    title: 'Trabajo - Desarrolladora de Machine Learning',
    company_name: 'Area de Unificacion Informatica del Gobierno de la Provincia de Jujuy',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg', // URL del ícono de Python
    iconBg: '#4A90E2', // Color distintivo
    date: '2023 - 2024',
    description: 'Desarrollo de un proyecto utilizando Python, Django, MySQL, Visual Studio Code, GitHub y Docker.',
  },
  
  
  {
    title: 'Trabajo - Ministerio Público de la Acusación de Jujuy',
    company_name: 'Ministerio Publico de la Acusacion',
    icon: 'https://scontent.fjuj1-1.fna.fbcdn.net/v/t39.30808-6/308463550_453788700108780_571280695034783529_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFgyPHH8ZosOeNsggV6t3q0Ld40A7wTf5gt3jQDvBN_mLXKptlU_6foTY6bPBP2mz1SSB3Be11Zr4_qK6_4vZAP&_nc_ohc=bT0ygqdE1pkQ7kNvgFrU88n&_nc_zt=23&_nc_ht=scontent.fjuj1-1.fna&_nc_gid=AJdtzGnLVsFdLjsdmxA_L5x&oh=00_AYD3yBGaqrXuEqTduFXaOmTW7VpTAt571TW9-pPGXoevQw&oe=67A45E6C', // URL del logo
    iconBg: '#F5A623', // Color distintivo
    date: '2024 - Presente',
    description: '.',
  },
  

];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: 'A single-page application that allows users to search for any movie or show\'s ratings and its details.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
