import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import meliPhoto from '../assets/personal/meli.jpeg';

const Hero = () => {
  return (
    <section id="inicio" className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
      bg-transparent overflow-hidden items-center justify-center">
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        
        {/* Foto con círculo más grande */}
        <div className="w-60 h-60 sm:w-72 sm:h-72 bg-white/20 backdrop-blur rounded-full overflow-hidden flex items-center justify-center ring-2 ring-teal-300/60">
          <img
            src={meliPhoto}
            alt="Foto de meli"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto y redes sociales */}
        <div className="text-center sm:text-left">
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-md font-poppins uppercase`}>
            Fátima Melisa Lino
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-100/90`}>
            Licenciada en Sistemas.          </p>
          <p className={`${styles.heroSubText} mt-2 text-gray-100/90`}>
            Analisis de Datos y Machine Learning | Diseño UX/UI
          </p>

          {/* Íconos de redes sociales */}
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/fatima-melisa-lino-744166225" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-teal-300 transition-colors w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/melisa.lino" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-teal-300 transition-colors w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/1KjdEzLjic" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-teal-300 transition-colors w-6 h-6" />
            </a>
            <a href="https://github.com/Melisa7L" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-teal-300 transition-colors w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Flecha animada */}
  <div className="absolute xs:bottom-2 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-teal-300/80 bg-white/10 backdrop-blur-sm flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
