import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'; // Asegúrate de tener react-icons instalada

const Hero = () => {
  return (
    <>
      {/* Fondo con nueva imagen y opacidad reducida */}


      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        
        <div className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}>

          {/* Espacio para la foto a la izquierda */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden">
              {/* Aquí puedes agregar tu imagen */}
              <img
                src="URL_DE_TU_IMAGEN"
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="ml-10"> {/* Margen izquierdo ajustado aquí */}
            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase`}>
              Fátima Melisa Lino{' '}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
              Licenciatura en Sistemas. <br className="sm:block hidden" />
            </p>

            {/* Íconos de redes sociales */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/fatima-melisa-lino-744166225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/melisa.lino/?utm_source=qr&igsh=MXBjOXMxbjlkOWt1cg%3D%3D#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1KjdEzLjic/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white w-6 h-6" />
              </a>
              <a href="https://github.com/Melisa7L" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white w-6 h-6" />
              </a>
            </div>
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
      </section>
    </>
  );
};

export default Hero;