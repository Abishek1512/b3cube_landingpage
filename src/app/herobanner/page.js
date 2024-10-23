'use client'
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

import { delay, motion } from "framer-motion";


const useSequentialDisplay = (sequences) => {
    const [visibleElements, setVisibleElements] = useState({});
  
    useEffect(() => {

      setVisibleElements(prev => ({
        ...prev,
        firstElement: true
      }));
  
      // Set up timeouts for each sequence
      sequences.forEach(({ id, delay }) => {
        setTimeout(() => {
          setVisibleElements(prev => ({
            ...prev,
            [id]: true
          }));
        }, delay);
      });
    }, []);
  
    return visibleElements;
  };
  
  // Animated div component
  const AnimatedDiv = ({ id, isVisible, children, className = "", animationType = "fadeUp" }) => {
    // Define different animation variants
    const animations = {
      fadeUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.2,
          ease: [0.12, 1, 0.2, 1.7],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      },
      slideRight: {
        initial: { opacity: 30, x: 150 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: 0.5,  // Increased duration
          ease: [0.12, 1, 0.2, 1.7],
          type: "spring",
          stiffness: 30,  // Reduced stiffness for softer movement
          damping: 20,    // Increased damping for smoother end
          mass: 1.2       // Added mass for more "weight" to the animation
        }
      }
    };
  
    const selectedAnimation = animations[animationType];
  
    return (
      <motion.div
        initial={selectedAnimation.initial}
        animate={isVisible ? selectedAnimation.animate : selectedAnimation.initial}
        transition={selectedAnimation.transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

const HeroSection = () => {
    return (

        <section id="hero" className={` bg-[50%] bg-no-repeat bg-cover pt-[36px]`}>
            <div className={` ${styles.w_container} w-full xl:max-w-[1440px] block px-[64px] md:max-w-[1440px] xl:max-w-[1440px] xl:ml-auto xl:mr-auto`}>
                <div className={styles.hero_wrapper}>
                    <div className={` gap-x-[60px] gap-y-[60px] grid-rows-[auto] grid-cols-[394px_1fr] auto-cols-[1fr] grid xl:grid-cols-[540px_1fr] md:gap-x-[48px] md:gap-y-[48px] md:grid-cols-[1fr] lg:gap-x-[60px] lg:gap-y-[60px] lg:grid-rows-[auto] lg:grid-cols-[394px_1fr] lg:auto-cols-[1fr] lg:grid`}>
                        <div className={`self-center md:[grid-area:span_1_/_span_1_/_span_1_/_span_1] md:place-self-center md:[flex-flow:column] md:justify-start md:items-center md:max-w-[516px] md:flex`}>
                            <div data-w-id="24148052-0508-b3d0-ee2b-ef28262d5109" className={'gap-x-[8px] gap-y-[8px] bg-[#1c1c1d] border-[1px] border-[solid] border-[#ffffff0d] rounded-[8px] justify-start items-center mb-[20px] pl-[6px] pr-[12px] py-[6px] inline-flex'}>
                                <div className={'gap-x-[8px] rounded-[4px] justify-start items-center px-[5px] py-[3px] flex  gap-x-[2px] gap-y-[2px]  bg-[#d4ff2617]'}>
                                    <div className="traders_number-icon-wrapper">
                                        <div className="code-embed w-embed"><svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.0592 13.5975C12.9037 13.2058 12.6622 12.8546 12.3531 12.5683C11.8306 12.0835 11.1473 11.8139 10.4342 11.8139C9.24511 11.8139 7.36573 11.8139 6.17663 11.8139C5.46353 11.8139 4.78028 12.0835 4.25686 12.5683C3.94773 12.8546 3.7071 13.2058 3.55078 13.5975M10.4791 4.30262C11.6794 5.503 11.6794 7.44918 10.4791 8.64955C9.2787 9.84993 7.33252 9.84993 6.13214 8.64955C4.93177 7.44918 4.93177 5.503 6.13214 4.30262C7.33252 3.10225 9.2787 3.10225 10.4791 4.30262Z"
                                                stroke="#CDFE6C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg></div>
                                    </div>
                                    <div className={'font-[Sora,_sans-serif] text-[#cdfe6c] text-[var(--font-size--laptop--body-xs)]'}>0</div>
                                </div>
                                <div className={'font-[var(--font--sora)] text-[12px] font-semibold'}>All Time Traders</div>
                            </div>
                            <h1 data-w-id="f4b480cd-a3bb-2df9-5bd5-145ca8420f25" className={` ${styles.heading_style_h1_sub} font-[var(--font--sora)] xl:text-[42px] lg:text-[36px] sm:text-[32px] mt-0 mb-[24px] font-normal leading-[140%] md:text-center md:text-[36px]`}>Build, Manage, and Invest
                                in DeFi Crypto Funds <span className={styles.h1_accent}>with AI</span></h1>
                            <p data-w-id="09655fda-43f8-5554-1956-d0f583583dc3" className={`text-[16px] mb-[32px] lg:text-[14px] leading-[160%] md:text-center ${styles.hero_sub_text}`}>B3X is the most advanced AI-driven
                                protocol for DeFi, allowing anyone to invest, build, and manage their crypto fund for perpetual
                                futures and options without any coding required.<br /></p>
                            <div data-w-id="f694fa7c-6427-8e03-946a-095c43a65ae2" className={`gap-x-[16px] gap-y-[16px] mb-[48px] flex`}><a href="#"
                                className={`gap-x-[16px] gap-y-[16px] text-[14px] text-[#000] text-center rounded-[12px] justify-start items-center pl-[16px] pr-[4px] py-[4px] font-semibold no-underline [transition:all_.4s] flex [box-shadow:inset_0_-2px_#00000040] ${styles.is_green} `}> {/*${styles.w_inline_block}*/}
                                <div>Read Pitch Deck</div>
                                <div className={`${styles.is_white} gap-x-[16px] gap-y-[16px] rounded-[8px] bg-[#fff] justify-center items-center w-[44px] h-[44px] flex`}>
                                    <div className="code-embed w-embed"><svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.7801 5.66786L6.31005 1.19786L7.48839 0.0195312L13.9701 6.5012L7.48839 12.9829L6.31005 11.8045L10.7801 7.33453H0.636719V5.66786H10.7801Z"
                                            fill="#040405"></path>
                                    </svg></div>
                                </div>
                            </a>
                                <div className={`min-w-[140px]`}><a data-w-id="f8b900c2-6a2e-256e-3739-b47bd5c36b2a"
                                    href="66d9977e72e7dfd970c9e964/670ff9719a8c81d91bc25699_b3x-white-paper-v1.4.3.pdf"
                                    className={` ${styles.w_inline_block} text-[var(--font-size--laptop--body-s)] border-[1px] border-[solid] border-[#222225] rounded-[12px] flex-[1] justify-center items-center w-full h-full font-medium no-underline [transition:opacity_.2s] flex relative overflow-hidden [box-shadow:inset_0_-3px_#222225]`}>
                                    <div className='p-[16px]'>Read White Paper</div>
                                    <div className={`${styles.secondary_button_gradient_bg}`}></div>
                                </a></div>
                            </div>
                            <div data-w-id="3f2664b8-6f33-665b-6523-0dff9a7e5223" className={`${styles.hero_trustpilot}`}><img
                                src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e97c_trustpilot-logo.svg" loading="eager" alt=""
                                className="trustpilot_logo" /><img
                                    src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e98b_trustpilot-stars.svg" loading="eager"
                                    width="129" alt="" className="trustpilot_stars" />
                                <div className="trustpilot_text">TrustScore <span className="trustpilot_bold-text">4.6</span>  |  <span
                                    className="trustpilot_bold-text">2.492</span> rerviews
                                </div>
                            </div>
                        </div>
                        {/* <div id="w-node-_3b7ddaf9-015a-5121-c351-149dd7cd6d4c-70c9e965"
                            className={`${styles.hero_main_right_style}  justify-self-end justify-center items-center h-full min-h-[550px] flex relative overflow-hidden`}>



                                <img
                                src={'/pricechart.png'} loading="eager" alt=""
                                className={'align-middle max-w-full inline-block max-h-[400px] md:max-h-[256px]'} />


                            <img src="/herobgpatten1024.webp"
                                loading="eager" sizes="(max-width: 991px) 100vw, (max-width: 1439px) 379.25px, 100vw"
                                srcSet="/herobgpatten1024.webp 500w, /herobgpatten1024.webp 764w"
                                alt="" className={styles.hero_right_bg} />
                                <img
                                src="/herobgp1440.webp" loading="eager"
                                sizes="(max-width: 1439px) 100vw, 451.566650390625px"
                                srcSet="/herobgp1440.webp 500w, /herobgp1440.webp 1080w, /herobgp1440.webp 1101w"
                                alt="" className={`${styles.hero_right_bg} ${styles.is_desk}`} />
                                <img
                                src="/herobgp768.webp" loading="eager"
                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 90vw, 100vw"
                                srcSet="/herobgp768.webp 500w, /herobgp768.webp 800w, /herobgp768.webp 1080w, /herobgp768.webp 1344w"
                                alt="" className={`${styles.hero_right_bg} ${styles.is_tablet}`} />
                        </div> */}
                        <div id="w-node-_3b7ddaf9-015a-5121-c351-149dd7cd6d4c-70c9e965" data-w-id="3b7ddaf9-015a-5121-c351-149dd7cd6d4c" class={`${styles.hero_main_right_style} justify-self-end justify-center items-center h-full min-h-[550px] flex relative overflow-hidden md:min-h-[300px] rounded-[14px] md:justify-self-auto`}  >
                            <img src={'/pricechartnew.svg'} loading="eager" alt="" class="align-middle max-w-full inline-block max-h-[400px] md:max-h-[256px]" />
                            {/* <div class="hero_trustpilot is-mobile">
                                <img src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e97c_trustpilot-logo.svg" loading="eager" alt="" class="trustpilot_logo" />
                                <img src="https://cdn.prod.website-files.com/66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e98b_trustpilot-stars.svg" loading="eager" width="129" alt="" class="trustpilot_stars" />
                                <div class="trustpilot_text">
                                    TrustScore
                                    <span class="trustpilot_bold-text">4.6</span> &nbsp;| &nbsp;<span class="trustpilot_bold-text">2.492</span>
                                    rerviews
                                </div>
                            </div> */}
                            <img src="/herobgp1024.webp" loading="eager" sizes="(max-width: 991px) 100vw, (max-width: 1439px) 379.25px, 100vw" srcset="/herobgp1024.webp 500w, /herobgp1024.webp 764w" alt="" class={`h-full z-[-1] absolute ${styles.hero_right_bg} xl:hidden lg:block md:hidden` } />
                            <img src="/herobgp1440.webp" loading="eager" sizes="(max-width: 1439px) 100vw, 451.566650390625px" srcset="/herobgp1440.webp 500w, /herobgp1440.webp 1080w, /herobgp1440.webp 1101w" alt="" class={`h-full z-[-1] absolute ${styles.hero_right_bg} is-desk xl:block lg:hidden md:hidden`} />
                            <img src="/herobgp768.webp" loading="eager" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 90vw, 100vw" srcset="/herobgp768.webp 500w, /herobgp768.webp 800w, /herobgp768.webp 1080w, /herobgp768.webp 1344w" alt="" class={`h-full z-[-1] absolute md:h-auto ${styles.hero_right_bg} is-tablet xl:hidden lg:hidden md:block `} />
                        </div>
                    </div>
                    <div data-w-id="3f68dc87-7ea5-09a2-1979-9bc857f06ba8" className={`${styles.hero_cards} ${styles.hero_cards_sub}`}>
                        <div className={`${styles.hero_card} ${styles.is_unique}`}>
                            <aside className={`${styles.hero_card_top}`}>
                                <div className={styles.hero_card_number}>$<span className="ttv number">0</span>k</div>
                                <div className={`${styles.hero_card_icon_wrapper} ${styles.is_unique}`}>
                                    <div className="code-embed w-embed"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5742 8.6L17.9742 5L14.3742 8.6" stroke="url(#paint0_linear_955_148554)"
                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M17.9727 19L17.9727 5" stroke="url(#paint1_linear_955_148554)" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M4.37422 15.4004L7.97422 19.0004L11.5742 15.4004"
                                            stroke="url(#paint2_linear_955_148554)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M7.97266 5L7.97266 19" stroke="url(#paint3_linear_955_148554)" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_148554" x1="14.3742" y1="2.8025" x2="22.831"
                                                y2="20.6513" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_148554" x1="6.99455" y1="3.50245" x2="7.3295"
                                                y2="18.6704" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint2_linear_955_148554" x1="6.03212" y1="3.76493" x2="10.9152"
                                                y2="7.04135" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint3_linear_955_148554" x1="2.79916" y1="3.03779" x2="4.93272"
                                                y2="14.4268" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                </div>
                            </aside>
                            <div className={styles.hero_card_text}>Total Traded Volume</div>
                        </div>
                        <div className={styles.hero_card} >
                            <div className={`${styles.hero_card_top}`}>
                                <div className={styles.hero_card_number}><span className="tvl">0</span>k</div>
                                <div className={styles.hero_card_icon_wrapper}>
                                    <div className="code-embed w-embed"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.8711 11V9.684C10.8711 8.754 11.6251 8 12.5551 8C13.4851 8 14.2391 8.754 14.2391 9.684V11"
                                            stroke="url(#paint0_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path fillRule="evenodd" clip-rule="evenodd"
                                            d="M14.5547 16H10.5547C10.0027 16 9.55469 15.552 9.55469 15V12C9.55469 11.448 10.0027 11 10.5547 11H14.5547C15.1067 11 15.5547 11.448 15.5547 12V15C15.5547 15.552 15.1067 16 14.5547 16Z"
                                            stroke="url(#paint1_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M8.05469 3H5.80469C4.56169 3 3.55469 4.007 3.55469 5.25V7.5"
                                            stroke="url(#paint2_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M3.55469 16.5V18.75C3.55469 19.993 4.56169 21 5.80469 21H8.05469"
                                            stroke="url(#paint3_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M17.0547 21H19.3047C20.5477 21 21.5547 19.993 21.5547 18.75V16.5"
                                            stroke="url(#paint4_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M21.5547 7.5V5.25C21.5547 4.007 20.5477 3 19.3047 3H17.0547"
                                            stroke="url(#paint5_linear_955_155824)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_155824" x1="7.23908" y1="3.62745" x2="20.3889"
                                                y2="20.2693" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_155824" x1="8.16666" y1="3.51832" x2="25.3399"
                                                y2="8.6519" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint2_linear_955_155824" x1="4.81878" y1="2.63089" x2="8.30954"
                                                y2="6.10918" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint3_linear_955_155824" x1="4.81878" y1="16.1309" x2="8.30954"
                                                y2="19.6092" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint4_linear_955_155824" x1="18.3188" y1="16.1309" x2="21.8095"
                                                y2="19.6092" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint5_linear_955_155824" x1="18.3188" y1="2.63089" x2="21.8095"
                                                y2="6.10918" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                </div>
                            </div>
                            <div className={styles.hero_card_text}>TVL</div>
                        </div>
                        <div className={styles.hero_card} >
                            <div className={`${styles.hero_card_top}`}>
                                <div className={styles.hero_card_number}>0k</div>
                                <div className={styles.hero_card_icon_wrapper}>
                                    <div className="code-embed w-embed"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.30469 15.889L10.3757 10.818C10.7667 10.427 11.3997 10.427 11.7897 10.818L13.9307 12.959C14.3217 13.35 14.9547 13.35 15.3447 12.959L21.3047 7"
                                            stroke="url(#paint0_linear_955_163094)" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                        <path d="M18.6367 7H21.3037V9.667" stroke="url(#paint1_linear_955_163094)" strokeWidth="1.5"
                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M21.3055 20.9287H2.23047V3.2207" stroke="url(#paint2_linear_955_163094)"
                                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_163094" x1="9.79922" y1="6.27088" x2="15.665"
                                                y2="16.7914" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_163094" x1="19.3859" y1="6.78124" x2="21.4548"
                                                y2="8.84271" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint2_linear_955_163094" x1="7.5888" y1="1.7682" x2="21.2911"
                                                y2="16.4755" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white"></stop>
                                                <stop offset="1" stopColor="#A8ABD3"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                </div>
                            </div>
                            <div className={styles.hero_card_text}>Total Connected Wallets</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
