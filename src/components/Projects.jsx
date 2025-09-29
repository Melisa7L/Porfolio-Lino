import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, diamanteN, diamanteB } from '../assets';
import send from '../assets/icons/send.png';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {/* Overlay de Play para videos de YouTube */}
      {/^https?:\/\/www\.youtube\.com\//.test(demo) && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-teal-400/80 backdrop-blur-sm flex items-center justify-center shadow-xl">
            <span className="ml-1 border-l-[22px] border-l-white border-y-[14px] border-y-transparent" />
          </div>
        </div>
      )}

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[180px] h-[28px] 
        whitespace-nowrap sm:text-[21px] text-[15px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(79, 92, 8, 0.5)] rounded-b-[24px] z-20">
            {repo && (
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  onClick={() => window.open(repo, '_blank')}
                  className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8]">
                  <img
                    src={github}
                    alt="source code"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
            )}

            <h2
              className="font-bold sm:text-[24px] text-[17px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-white drop-shadow-lg sm:text-[15px] text-[13px] 
              max-w-3xl sm:leading-[25px] leading-[19px]
              font-poppins tracking-[1px] bg-black/40 px-2 py-1 rounded-md">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}>
              <img
                src={diamanteN}
                alt="diamanteN"
                className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
              />
              {/^https?:\/\/www\.youtube\.com\//.test(demo) ? 'VER VIDEO' : 'LIVE DEMO'}
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Casos de estudio</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Proyectos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
Estos proyectos son el resultado de mi curiosidad y dedicación por aprender y crear. Cada uno incluye una breve descripción, acceso al código fuente y demostraciones en vivo que muestran cómo transformo ideas en soluciones funcionales e innovadoras.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer(0.15, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
