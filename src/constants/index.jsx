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
  vestidos,
  cripto,
  propinas,
  mpa,
  movie,
  django,
  coverhunt,
  dcc,
  kelhel,
  python,
  microverse,
  bigdata,
  testing,
  electricidad,
  fraudes_1,
  fraudes_2,
  fraudes_3,
  homicidios_1,
  homicidios_2,
  homicidios_3,
  homicidios_4,
  homicidios_5,
  prestamos_1,
  prestamos_2,
  prestamos_3,
  productos,
  react,
  analisis_datos,
  ingles,
  contable,
  access,
  desarrollo,
  reparacion,
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
    id: 'analyses',
    title: 'Análisis',
  },
  {
    id: 'aprendizaje',
    title: 'Aprendizaje',
  }

];

import machine from '../assets/icons/machine.png';
import bigdata2 from '../assets/icons/big data2.png';
import diseno from '../assets/icons/diseño.png';
import testingIcon from '../assets/icons/testing2.png';

const services = [
  {
    title: 'Machine Learning',
    icon: machine,
  },
  {
    title: 'Big Data',
    icon: bigdata2,
  },
  {
    title: 'UI/UX Design',
    icon: diseno,
  },
  {
    title: 'Testing',
    icon: testingIcon,
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
  {
    title: 'Trabajo - Ministerio Publico de la Acusacion de Jujuy',
    company_name: 'Ministerio Publico de la Acusacion',
    icon: mpa, 
    iconBg: '#F5A623',
    date: '2024 - Presente',
    description: '.',
  },
  {
    title: 'Trabajo - Desarrolladora de Machine Learning',
    company_name: 'Area de Unificacion Informatica del Gobierno de la Provincia de Jujuy',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg',
    iconBg: '#4A90E2',
    date: '2023 - 2024',
    description: 'Desarrollo de un proyecto utilizando Python, Django, MySQL, Visual Studio Code, GitHub y Docker.',
  },
    {
    title: 'CURSO TESTING QA MANUAL',
    company_name: 'ProgramON Coca Cola',
    icon: testing,
    iconBg: '#333333',
    date: 'Agosto 2025 - Octubre 2025',
  },
  {
    title: 'Diplomatura Universitaria - Analisis de Datos desde Cero - Acelera tu Futuro',
    company_name: 'Universidad Nacional de Jujuy',
    icon: analisis_datos,
    iconBg: '#333333',
    date: 'Febrero 2025 - Abril 2025',
  },
  {
    title: 'CURSO UDEMY:"REACT-LA GUIA COMPLETA:HOOKS CONTEXT REDUX MERN+15 APPS"',
    company_name: 'Udemy',
    icon: react,
    iconBg: '#333333',
    date: '2024',
  },
  {
    title: 'Curso de Electricidad Domiciliaria',
    company_name: 'Fundacion Educando',
    icon: electricidad,
    iconBg: '#333333',
    date: '2024',
  },
  {
    title: 'CURSO DE INGLES EN CUI-UBA',
    company_name: 'Centro Universitario de Idiomas',
    icon: ingles,
    iconBg: '#333333',
    date: '2023',
  },
  {
    title: 'CURSO FORMACION LIDER DE TESTING',
    company_name: 'Universidad Tecnologica Nacional',
    icon: testing,
    iconBg: '#333333',
    date: 'Agosto de 2023',
  },
  {
    title: 'CURSO DE ORACLE (PROGRAMA NEXT EDUCACION)-BACKEND',
    company_name: 'Alura Latam',
    icon: backend,
    iconBg: '#333333',
    date: '02/04/2023 al 23/08/2023',
  },
  {
    title: 'CURSO DE BIG DATA',
    company_name: 'Programa Codo a Codo',
    icon: bigdata,
    iconBg: '#333333',
    date: 'Julio 2022',
  },
  {
    title: 'CURSO DE SECRETARIADO CONTABLE INFORMATICO',
    company_name: 'Punto Digital',
    icon: contable,
    iconBg: '#333333',
    date: 'Agosto 2021- Diciembre 2021',
  },
  {
    title: 'CURSO DE MICROSOFT ACCESS',
    company_name: 'Punto Digital',
    icon: access,
    iconBg: '#333333',
    date: 'Enero 2018- Marzo 2018',
  },
  {
    title: 'CURSO DE INTRODUCCION AL DESARROLLO WEB',
    company_name: 'Universidad de los Andes Colombia',
    icon: desarrollo,
    iconBg: '#333333',
    date: '30 de octubre 2021',
  },
  {
    title: 'Curso teórico-práctico de armado y reparación de PC',
    company_name: 'Universidad Nacional de Jujuy',
    icon: reparacion,
    iconBg: '#333333',
    date: '2019',
  },
];
const projects = [
  {
    id: 'project-ml-news',
    name: 'Clasificador de Noticias',
    description:
      'Herramienta de Machine Learning que clasifica noticias. Video demostrativo con flujo, dataset y resultados.',
    tags: [
      { name: 'ml', color: 'green-text-gradient' },
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'streamlit', color: 'pink-text-gradient' },
    ],
    image: 'https://img.youtube.com/vi/pIdJLXu1O_Y/hqdefault.jpg',
    repo: '',
    demo: 'https://www.youtube.com/watch?v=0qxtEgYv11U',
  },

  {
    id: 'sitio-creaciones-gabriela',
    name: 'Sitio Creaciones Gabriela',
    description:
      'Sitio para visualizar los vestidos del negocio llamado Creaciones Gabriela.',
    tags: [
      { name: 'ml', color: 'green-text-gradient' },
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'streamlit', color: 'pink-text-gradient' },
    ],
    image: vestidos,
    repo: 'https://melisa7l.github.io/Creaciones-Gabriela/',
    demo: 'https://melisa7l.github.io/Creaciones-Gabriela/',
  },

  {
    id: 'project-5',
    name: 'Diseños de vistas MPA Jujuy',
    description:
      'Fotos de diseños de vistas que hice para el Sistema del Ministerio Publico de la acusación.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: mpa,
    repo: 'https://drive.google.com/drive/u/0/folders/1BvodviTkdUJCFTpBTU6gH5pVmTWWFGyJ',
    demo: 'https://drive.google.com/drive/u/0/folders/1BvodviTkdUJCFTpBTU6gH5pVmTWWFGyJ',
  },
  {
    id: 'project-4',
    name: 'Citas en Veterinaria',
    description: 'Pagina que maneja los turnos de una veterinaria y carga en detalle la informacion de cada paciente.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
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
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: calorias,
    repo: 'https://melisa7l.github.io/calorias/',
    demo: 'https://melisa7l.github.io/calorias/',
  },
  
  {
    id: 'project-guitarras',
    name: 'Sitio Guitarras',
    description:
      'En este sitio, encontrarás una amplia variedad de guitarras para todos los gustos y necesidades.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: guitarras,
    repo: 'https://melisa7l.github.io/guitarra/',
    demo: 'https://melisa7l.github.io/guitarra/',
  },
{
    id: 'project-propinas',
    name: 'Sitio Propinas',
    description:
      'Este sitio te permite calcular fácilmente las propinas en función del total de la cuenta y el porcentaje que deseas dejar.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: propinas,
    repo: 'https://melisa7l.github.io/Propinas/',
    demo: 'https://melisa7l.github.io/Propinas/',
  },

  {
    id: 'project-damas',
    name: 'Juego Damas',
    description:
      'Juego de Damas realizado con C++ y SFML.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
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
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: cripto,
    repo: 'https://melisa7l.github.io/cripto/',
    demo: 'https://melisa7l.github.io/cripto/',
  },
  
];

const analyses = [
  {
    id: 'analysis-fraudes',
    name: 'Análisis de Fraudes bancarios',
    description: 'El proyecto analizó 200.000 transacciones (usando Python y Power BI) para hallar patrones de fraude, enfocándose en el tipo de operación, perfil del cliente y el factor temporal.',
    images: [fraudes_1, fraudes_2, fraudes_3],
    explanation:
      'Análisis exploratorio, modelado y evaluación de modelos de clasificación para detectar comportamientos anómalos.',
    conclusion: 'Conclusión:El fraude no es aleatorio, sino que sigue patrones predecibles por hora, día y perfil. Esta información es vital para mejorar la prevención y la seguridad operativa',
    detailedDescription: `Hallazgos Clave:\n1.Operaciones Afectadas: Transferencias, débitos y créditos.
2.Víctimas: Clientes de 35 a 55 años.
3.Horario Crítico: Madrugada (00:00 a 09:00 hs).
4.Días Pico: Lunes y viernes.
5.Ubicación: Ciudades con alto volumen transaccional.`,
    repo: '',
    demo: '',
  },
  {
    id: 'analysis-homicidios',
    name: 'Análisis de homicidios dolosos',
    description: 'Estudio de la conexión víctima-inculpado para detectar patrones y redes de relaciones.',
    images: [homicidios_1, homicidios_2, homicidios_3, homicidios_4, homicidios_5],
    explanation:
      ``,
    conclusion: 'Los modelos predictivos son útiles, pero necesitan datasets más amplios para mejorar la precisión, especialmente en la identificación de relaciones familiares específicas',
    detailedDescription: `Hallazgos Clave: \n1.Relación Dominante: En la mayoría de los casos, la víctima no tenía relación previa con el inculpado.\n2.Limitación del Modelo: El modelo tiene dificultad para predecir relaciones familiares complejas.\n3.Clustering: Se detectaron grupos de relaciones bien definidos, pero un cluster presentó baja separación, lo que sugiere la existencia de factores ocultos no incluidos en el análisis.`,
    repo: '',
    demo: '',
  },
  {
    id: 'analysis-prestamos',
    name: 'Análisis de impago de préstamos',
    description: 'Modelado de riesgo y análisis de variables predictoras del incumplimiento.',
    images: [prestamos_1, prestamos_2, prestamos_3],
    explanation:
      'Limpieza de datos, selección de características y modelos de scoring para predecir probabilidad de impago.',
    conclusion: 'El riesgo está impulsado por préstamos de inversión . Ajustar el scoring y endurecer las políticas para propiedades no habitacionales.',
    detailedDescription: 'Cifras Clave: Volumen Total: $49 mil millones.\n\nHallazgos Clave:\n1.Mayor Riesgo: Préstamos para propiedades de inversión (default $>30\%$).\n2.Sobreendeudamiento: Clientes de ingresos bajos,medios/altos.\n3.Edad Concentrada: Clientes de 35 a 54 años.',
    repo: '',
    demo: '',
  },
  {
    id: 'analysis-productos',
    name: 'Análisis de productos por tipo de compra',
    description: 'Segmentación y análisis de comportamiento según el tipo de compra del producto.',
    images: [productos],
    explanation:
      'Agrupamiento, análisis de cesta de compras y segmentación de clientes a través de clustering.',
    conclusion: 'Los canales físico y online dominan el volumen de ventas. La rotación se concentra en categorías de consumo básicas. Las diferencias de ventas y tickets entre las ciudades son clave para la segmentación comercial.',
    detailedDescription: 'Hallazgos Clave:\n1.Productos Estrella: Los productos más vendidos en cantidad son Papas Fritas, Bebidas y Hamburguesas (consumo básico).\n2.Ubicación: Las ciudades de París, Madrid y Lisboa concentran la mayor actividad transaccional.\n3.Ticket Promedio: El ticket promedio se sitúa en torno a 3.15 mil, pero con una alta dispersión entre las diferentes ciudades.',
    repo: '',
    demo: '',
  },
];


export { services, technologies, experiences, projects, analyses };
