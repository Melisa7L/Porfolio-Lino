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
        <h2 className={styles.sectionHeadText}>Sobre mi.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-jet text-[18px] max-w-3xl leading-[30px]">
Soy Licenciada en Sistemas, apasionada por la tecnología y el aprendizaje continuo. Actualmente trabajo en el Ministerio Público de la Acusación, donde participo en el análisis y diseño de sistemas, el manejo de datos sensibles y la capacitación a usuarios, contribuyendo a mejorar la eficiencia y la experiencia de uso.

Cuento con experiencia en inteligencia de negocios, análisis de datos, Big Data y bases de datos, aplicando herramientas como Python, SQL, React, Docker y AWS. Durante mi práctica profesional en el Gobierno de Jujuy desarrollé un proyecto con Django y Machine Learning, que incluyó el despliegue en producción en AWS.

Me caracterizo por ser organizada, adaptable y orientada a los desafíos. Mi motivación es seguir creciendo y aportar valor en proyectos innovadores, especialmente en el área de análisis de datos y machine learning.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
