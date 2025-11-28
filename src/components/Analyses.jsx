import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
// unused send icon removed
import { analyses } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const AnalysisCard = ({ name, description, images = [], explanation, conclusion, detailedDescription = '', index, isActive=true }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const innerSwiperRef = useRef(null);
  const [activeInnerIndex, setActiveInnerIndex] = useState(0);

  const openModalWithImage = (img, i) => {
    setModalIndex(i);
    setModalOpen(true);
    // stop inner swiper autoplay when opening modal
    if (innerSwiperRef.current && innerSwiperRef.current.autoplay) {
      try { innerSwiperRef.current.autoplay.stop(); } catch (e) {}
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    // resume inner swiper autoplay after closing modal
    if (innerSwiperRef.current && innerSwiperRef.current.autoplay) {
      try { innerSwiperRef.current.autoplay.start(); } catch (e) {}
    }
  };

  const handleInnerSlideChange = (swiper) => {
    const idx = swiper.realIndex ?? swiper.activeIndex;
    setActiveInnerIndex(idx);
  };

  useEffect(() => {
    if (modalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    if (modalOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  useEffect(() => {
    // close modal if card is not active (main swiper moved)
    if (!isActive && modalOpen) closeModal();
  }, [isActive]);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.6)}
      className={`relative w-full min-h-[340px] max-w-[1100px] card-gradient p-6 rounded-[18px] card-shadow`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT: text content */}
        <div className="flex flex-col gap-4 p-2 md:pr-8">
          <h3 className="font-bold sm:text-[36px] text-[28px] text-timberWolf uppercase font-beckman leading-[1.05]">{name}</h3>
          <p className="text-white text-[18px] leading-[28px] font-poppins tracking-[0.6px] max-w-2xl">{description}</p>

          <div className="mt-3 text-white text-[15px] bg-black/40 p-4 rounded-md whitespace-pre-wrap max-h-[320px] overflow-auto">
            {detailedDescription || explanation || ''}
            {conclusion && (
              <div className="mt-4 text-[14px] opacity-90">
                <strong>Conclusión:</strong>
                <div>{conclusion}</div>
              </div>
            )}
          </div>
        </div>

      {/* Modal overlay */}
      {modalOpen && (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[92%] max-h-[92%] flex items-center justify-center">
            <button onClick={closeModal} aria-label="Cerrar" className="absolute top-3 right-3 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:opacity-90">
              <span className="font-bold text-lg text-black leading-none">×</span>
            </button>
            <div className="rounded-md overflow-hidden bg-black/80 w-full">
              <Swiper
                modules={[Navigation]}
                initialSlide={modalIndex}
                spaceBetween={12}
                slidesPerView={1}
                navigation
                loop={false}
                className="w-full h-[80vh] flex items-center"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i} className="w-full h-full flex items-center justify-center">
                    <img src={img} alt={`modal-${i}`} className="max-h-[80vh] max-w-full object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

        {/* RIGHT: image slider with arrows */}
        <div className="w-full flex items-center justify-center p-2">
          <div className="w-full h-[420px] rounded-[12px] overflow-hidden shadow-lg relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={12}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSlideChange={(swiper) => handleInnerSlideChange(swiper)}
              onSwiper={(s) => (innerSwiperRef.current = s)}
              className="w-full h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i} className="w-full h-full">
                  <img src={img} alt={`${name}-${i}`} className="w-full h-full object-cover cursor-zoom-in" onClick={() => openModalWithImage(img, i)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Analyses = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Casos de estudio</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Análisis de datos</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          A continuación verás una selección de mis análisis de datos. Cada caso incluye un conjunto de imágenes, una explicación del enfoque y las conclusiones principales. Más adelante podré ampliar cada caso (repositorio, informe y notebook).
        </motion.p>
      </div>

      <motion.div variants={staggerContainer(0.15, 0.05)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.15 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={48}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="h-auto pb-10 analyses-swiper"
            onSlideChange={(swiper) => setMainIndex(swiper.realIndex ?? swiper.activeIndex)}
            onSwiper={(s) => (mainSwiperRef.current = s)}
          >
            {analyses.map((analysis, index) => (
              <SwiperSlide key={analysis.id} className="flex justify-center">
                <AnalysisCard index={index} isActive={mainIndex === index} {...analysis} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Analyses, 'analyses');
