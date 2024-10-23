"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const totalSlides = items.length;
  const visibleSlides = 4;
  const progressDots = 5;
  const slideWidth = 300;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);

      const newIndex = Math.round(scrollLeft / (slideWidth + 8));
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const scrollPosition = (slideWidth + 8) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollToSlide = (dotIndex) => {
    const targetIndex = dotIndex;
    const scrollDistance = (targetIndex - currentIndex) * (slideWidth + 8);

    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
      setCurrentIndex(targetIndex);

      setCanScrollLeft(targetIndex > 0);
      setCanScrollRight(targetIndex + visibleSlides < totalSlides);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftStart(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  const snapToNearestSlide = () => {
    const { scrollLeft } = carouselRef.current;
    const newIndex = Math.round(scrollLeft / (slideWidth + 8));
    const scrollPosition = newIndex * (slideWidth + 8);
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeftStart(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="w-full flex justify-center">
        <div className="inline-flex justify-center gap-1 mr-10 border border-[#1C1C1F] rounded-lg p-1">
          <button 
            className="p-2 bg-[#141415] rounded-lg hover:bg-[#313136] transition-colors focus:outline-none  focus:bg-[#313136]"
            aria-label="Previous"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button 
            className="p-2 bg-[#141415] rounded-lg hover:bg-[#313136] transition-colors focus:outline-none focus:bg-[#313136]"
            aria-label="Next"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="w-full">
        <div
          className="container px-4 mx-auto py-12 block md:flex w-full overflow-x-scroll overscroll-x-auto [scrollbar-width:none] relative"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => isDragging && setIsDragging(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={cn("flex flex-row justify-start gap-4", "max-w-7xl mx-auto")}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut", once: true }}}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          {[...Array(progressDots)].map((_, dotIndex) => (
            <div
              key={dotIndex}
              onClick={() => scrollToSlide(dotIndex)}
              className={`h-[0.1rem] w-8 mx-1 rounded cursor-pointer transition-colors duration-300 ${
                currentIndex === dotIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};


export const Card = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10 bg-red">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}

        className="cursor-default rounded-3xl bg-black dark:bg-neutral-900 w-96 h-[32rem] md:w-72 overflow-hidden flex flex-col items-start justify-start relative z-10 border border-[#1E1F24]"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        <div className="relative z-40 py-2 px-2 flex flex-col gap-[10px]">

          <div className="flex justify-center items-center w-full h-full relative bg-[#181822] rounded-md">
            <BlurImage
              src={card.src}
              alt={card.title}
              width={270}
              height={245}
              className="object-cover mx-14 md:xrounded-xl"
            />
          </div>
          <motion.a className="absolute right-0 mx-4 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none"><path 
                fill="#fff" d="M5.634 2.874c-1.13 0-2.048.916-2.048 2.046s.916 2.068 2.046 2.068S7.68 6.05 7.68 4.92c0-1.13-.916-2.046-2.046-2.046Zm9.99 5.424c-1.72 0-2.704.9-3.175 1.794h-.05V8.539H9.01V19.92h3.53v-5.634c0-1.485.113-2.92 1.95-2.92 1.811 0 1.838 1.693 1.838 3.014v5.54h3.53V13.67c0-3.059-.657-5.37-4.234-5.37Zm-11.757.24v11.383h3.534V8.54H3.867Z" 
                opacity=".64"/></svg>
          </motion.a>
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left px-4"
          >
            {card.name}
          </motion.p>

          <div className="rounded bg-[#1E1F24] w-1/2 ml-3 flex flex-row items-start justify-start py-1.5 pl-1.5 pr-[5px] text-3xs text-color-grey-81 px-4 ">
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-white text-xs md:text-xs font-semibold max-w-xs text-left font-sans"
            >
              {card.title}
            </motion.p>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-xs text-color-grey-81 px-4 mt-4">
          <div className="relative mb-1">EXPERIENCE</div>
          <div className="flex flex-col  items-start justify-start py-0 pl-0 pr-5 gap-2">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-2 shrink-0">
              {card.orgLogo?.map((logo, index) => (
                <img
                  key={index}
                  className="h-[31px] w-[98px] relative overflow-hidden shrink-0 object-cover max-w-[98px] max-h-[31px] flex-basis-[48%]"
                  loading="lazy"
                  alt=""
                  src={logo}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 bg-[#181822] md:mx-2 h-[245px]",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
