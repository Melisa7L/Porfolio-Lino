import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, diamanteN, diamanteB } from '../assets';
import send from '../assets/icons/send.png';
import { projects } from '../constants'; 
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  name,
  description,
  image,
  repo,
  demo,
  index,

}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.5)} 
      className={`relative flex items-center justify-center w-full h-[450px] cursor-default card-shadow rounded-[24px]`}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {/^https?:\/\/www\.youtube\.com\//.test(demo) && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-teal-400/80 backdrop-blur-sm flex items-center justify-center shadow-xl">
            <span className="ml-1 border-l-[22px] border-l-white border-y-[14px] border-y-transparent" />
          </div>
                      </div>
      )}
      <div
        className="absolute bottom-0 p-8 justify-start w-full 
        flex-col bg-[rgba(79, 92, 8, 0.65)] rounded-b-[24px] z-20">
        {repo && (
          <div className="absolute top-[-25px] right-3 flex justify-end">
            <div
              onClick={() => window.open(repo, '_blank')}
              className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                flex justify-center items-center cursor-pointer
                sm:opacity-[0.9] opacity-[0.8] hover:scale-105 transition-transform duration-200">
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
            src={send}
            alt="demo"
            className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
          />
          {/^https?:\/\/www\.youtube\.com\//.test(demo) ? 'VER VIDEO' : 'LIVE DEMO'}
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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

        <div className="mt-[50px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30} 
            slidesPerView={1} 
            navigation 
            pagination={{ clickable: true }} 
            loop={true} 
            grabCursor={true} 
            autoplay={{
                delay: 1000,           
                disableOnInteraction: false,
                pauseOnMouseEnter: true,    
            }}

            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[550px] pb-10" 
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  key={project.id}
                  index={index}
                  {...project}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>

  );
};

export default SectionWrapper(Projects, 'projects');