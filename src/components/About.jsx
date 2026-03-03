import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
  <img src={icon} alt={title} className="w-24 h-24 object-cover rounded-full" />
  <h3 className="text-taupe text-[24px] font-extrabold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={`${styles.sectionHeadText} inline-block border-b-4 border-teal-300 pb-1`}>Sobre mi.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-jet text-[18px] max-w-3xl leading-[30px]">
Soy Licenciada en Sistemas, apasionada por la tecnología y el aprendizaje continuo. Actualmente me desempeño como Strategic Account Manager en Colektia, donde gestiono carteras financieras de alto impacto. En este rol, combino mi formación técnica con el análisis estratégico de datos para optimizar el rendimiento de las cuentas, asegurando la eficiencia operativa y la satisfacción del cliente.

Cuento con sólida experiencia en Inteligencia de Negocios, Análisis de Datos, Big Data y bases de datos, aplicando herramientas como Python, SQL, React, Docker y AWS. Durante mi trayectoria, he desarrollado proyectos innovadores, incluyendo un clasificador de noticias con Machine Learning y el despliegue de soluciones en producción utilizando Django.

Me caracterizo por ser organizada, adaptable y orientada a los desafíos. Mi motivación es seguir aportando valor en entornos dinámicos, uniendo la visión estratégica de negocios con el poder del análisis de datos y la inteligencia artificial.
      </motion.p>

      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
