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
  calorias,
  guitarras,
  damas,
  cripto,
  mpa,
  movie,

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
      icon: mpa, // Usamos la imagen importada
      iconBg: '#F5A623',
      date: '2024 - Presente',
      description: '.',
    },
  
  
  
  

];

const projects = [
  {
    id: 'project-5',
    name: 'Diseños de vistas MPA Jujuy',
    description:
      'Galeria de Fotos que corresponden a algunos de los diseños de vistas que he creado para el Sistema del Ministerio Publico de la acusación.',
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
    image: mpa,
    repo: 'https://drive.google.com/drive/u/0/folders/1BvodviTkdUJCFTpBTU6gH5pVmTWWFGyJ',
    demo: 'https://drive.google.com/drive/u/0/folders/1BvodviTkdUJCFTpBTU6gH5pVmTWWFGyJ',
  },

  {
    id: 'project-4',
    name: 'Citas en Veterinaria',
    description: 'Es una pagina que maneja los turnos de una veterinaria y carga en detalle la informacion de cada paciente.',
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
    repo: 'https://melisa7l.github.io/Citas-de-una-Veterinaria/',
    demo: 'https://melisa7l.github.io/Citas-de-una-Veterinaria/',
  },
  {
    id: 'project-1',
    name: 'Contador de Calorias',
    description: 'Es un contador de calorias interactivo super interesante.',
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
    image: calorias,
    repo: 'https://melisa7l.github.io/calorias/',
    demo: 'https://melisa7l.github.io/calorias/',
  },
 
  {
    id: 'project-2',
    name: 'Sitio Guitarras',
    description:
      'En este sitio, encontrarás una amplia variedad de guitarras para todos los gustos y necesidades.',
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
    image: guitarras,
    repo: 'https://melisa7l.github.io/guitarra/',
    demo: 'https://melisa7l.github.io/guitarra/',
  },

  {
    id: 'project-2',
    name: 'Juego Damas',
    description:
      'Juego de Damas realizado con C++ y SFML.',
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
    image: damas,
    repo: 'https://github.com/Melisa7L/damas',
    demo: 'https://drive.google.com/drive/u/0/folders/1HSFPOFJ1cFh4oJyvmVTVh5dYhYVzAQSd',
  },

  {
    id: 'project-3',
    name: 'Criptomonedas',
    description: 'Su funcion es visualizar los distintos tipos de valores actuales y su cotizacion',
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
    image: cripto,
    repo: 'https://melisa7l.github.io/cripto/',
    demo: 'https://melisa7l.github.io/cripto/',
  },
  
];


export { services, technologies, experiences, projects };
