import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
/*import { shaq } from '../assets';*/

const Hero = () => {
  return (
    <>
      {/* Fondo con nueva imagen y opacidad reducida */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src="https://source.unsplash.com/random/1920x1080"
          alt="world map"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>

          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-red-500 sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-500 to-blue-300 sm:hidden" />
          </div>

          <div className="ml-10"> {/* Ajusté el margen izquierdo aquí */}
            {/* Color de texto cambiado a blanco */}
            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase`}>
              Fatima Melisa Lino{' '}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
              Lic. en Sistemas. <br className="sm:block hidden" />
            </p>
          </div>
        </div>

        {/* Flecha animada */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-500 flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>

        {/* Imagen de usuario */}
       /*<div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            /*src={shaq}*/
            alt="Melisa"
          />
        </div>*/
      </section>
    </>
  );
};

export default Hero;
