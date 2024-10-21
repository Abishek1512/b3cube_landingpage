"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "../../hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
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
                onClick={handleClose}
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
        onClick={handleOpen}
        className="rounded-3xl bg-black dark:bg-neutral-900 h-60 w-56 md:h-[28rem] md:w-64 overflow-hidden flex flex-col items-start justify-start relative z-10 border-t border-b border-gray-500"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />


        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />

<div className="relative z-40 py-4 flex flex-col gap-[10px]">
  {/* Center the image */}
  <div className="flex justify-center items-center w-full">
    <BlurImage
      src={card.src}
      alt={card.title}
      width={230}
      height={200}
      className="object-cover"
    />
  </div>

  {/* Text and Title */}
  <motion.p
    layoutId={layout ? `category-${card.category}` : undefined}
    className="text-white text-sm md:text-base font-medium font-sans text-left p-4"
  >
    {card.name}
  </motion.p>

  <div className="rounded bg-[#1E1F24] flex flex-row items-start justify-start py-1.5 pl-1.5 pr-[5px] text-3xs text-color-grey-81 px-4 w-1/2 ml-3">
    <motion.p
      layoutId={layout ? `title-${card.title}` : undefined}
      className="text-white text-xs md:text-xs font-semibold max-w-xs text-left font-sans"
    >
      {card.title}
    </motion.p>
  </div>
</div>



        {/* <div className="relative z-40 py-4 flex flex-col gap-[10px]">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
           EXPERIENCE
          </motion.p>
          <div class="rounded bg-[#1E1F24] flex flex-row items-start justify-start py-1.5 pl-1.5 pr-[5px] text-3xs text-color-grey-81">
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-white text-xs md:text-xs font-semibold max-w-xs text-left [text-wrap:balance] font-sans"
            >
              {card.title}
            </motion.p>
          </div>
        </div> */}

        <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-xs text-color-grey-81 px-4">
          <div className="relative leading-[14px]">EXPERIENCE</div>
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-2">
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
              {/* </div> */}
              {/* <div
                className="flex-1 flex flex-col items-start justify-center pt-0 px-0 pb-[0.6px]"
                // style={listitemStyle}
              >
                <div className="w-full overflow-hidden flex flex-row items-start justify-start max-w-[98px] max-h-[31px]">
                  <div
                    className="flex-1 overflow-hidden flex flex-col items-center justify-center"
                    // style={d9977e72e7dfd970c9e94eMSsvgStyle}
                  >
                    <img
                      className="self-stretch h-[30.4px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      // src={component11}
                    />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div
              className="w-[98px] flex flex-col items-start justify-center shrink-0"
              // style={listitem1Style}
            >
              <div className="w-full overflow-hidden flex flex-row items-start justify-start max-w-[98px] max-h-[31px]">
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-1.5">
                  <img
                    className="self-stretch h-[31px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    // src={component12}
                  />
                </div>
              </div>
            </div> */}
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
        "transition duration-300 bg-[#181822] m-4",
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
