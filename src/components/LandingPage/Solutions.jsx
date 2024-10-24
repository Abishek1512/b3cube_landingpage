'use client';
import React, { useRef, useEffect, useState } from 'react'
import styles from './Landing.module.css'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const Solutions = () => {
    const sectionRef = useRef(null);
    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress: sectionScrollProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const rotateValue = useTransform(sectionScrollProgress, [0, 1], [25, 0]);
    const rotateValue1 = useTransform(sectionScrollProgress, [0, 1], [-25, 0]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1 });
        } else {
            controls.start({ opacity: 0 });
        }
    }, [isInView, controls]);

    return (
        <section id="solutions" ref={sectionRef} className="section_solutions xl:pt-[120px] md:pt-[100px] sm:pt-[10px] pt-[50px]">
            <div className={`${styles.w_container} w-layout-blockcontainer container w_container block xl:px-[104px] w-full max-w-[1440px] mx-auto lg:px-[64px] md:px-[48px] sm:px-[16px] px-[16px]`}>
                <div className="solutions_wrapper justify-start items-center flex flex-col">
                    <div className={`${styles.solutions_top} gap-x-[24px] gap-y-[24px] [flex-flow:column] justify-start items-center mb-[48px] flex`}>
                        <div className="label font-[var(--font--sora)] text-[#000] bg-[--color--green] text-[12px] rounded-[8px] p-[8px] font-medium leading-[120%] inline-block">
                            <div className="label_text">Solutions</div>
                        </div>
                        <h2 className={`${styles.heading_bg} heading-style-h2 xl:text-[40px] text-[32px] font-[var(--font--sora)] text-[var(--font-size--laptop--h2)] text-center tracking-[-.3px] mt-0 mb-0 leading-[140%]`}>Your Defi Gateway</h2>
                    </div>
                    <div data-w-id="a18d496c-e967-bea8-ca36-825255d2d838" className={`${styles.solutions_cards} gap-x-[16px] gap-y-[16px] grid-rows-[auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] items-center grid`}>
                        <motion.div id="w-node-_78fde4c5-67ff-7d23-fd63-8532f4494bbb-70c9e965" 
                        initial={{ opacity: 0 }} 
                            style={{ rotate: rotateValue }} 
                            animate={controls}
                            data-w-id="78fde4c5-67ff-7d23-fd63-8532f4494bbb" className={`${styles.solution_cards} ${styles.is_third} ${styles.card} `} >
                            <img
                                src="/3rdimg.webp" loading="lazy" alt=""
                                className={styles.solutions_card_icon} />
                            <h3 className={styles.solutions_card_title}>For Fund Managers</h3><img
                                src="/separater.webp" loading="lazy"
                                alt="" className={styles.solutions_card_divider} />
                            <ul role="list" className={`${styles.solutions_card_list} w-list-unstyled`}>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>AI-powered Fund Builder</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>Comprehensive Backtesting Tools</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>Manual Building Options</div>
                                </li>
                            </ul>
                        </motion.div>
                        <div id="w-node-_2f007734-fa21-5f5b-14e1-59f4acbdbb34-70c9e965" className={`${styles.solution_cards} ${styles.card} ${styles.solutions_card_bg}  ${styles.is_white}`}>
                            <img
                                src="/solutions2.webp" loading="lazy" alt=""
                                className={styles.solutions_card_icon} />
                            <h3 className={`${styles.solutions_card_title} ${styles.for_investors}`}>For Investors</h3><img
                                src="/separater.webp"
                                loading="lazy" alt="" className={styles.solutions_card_divider} />
                            <ul role="list" className={`${styles.solutions_card_list} w-list-unstyled`}>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="25" viewbox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12.5879C20.3047 17.0062 16.723 20.5879 12.3047 20.5879C7.88641 20.5879 4.30469 17.0062 4.30469 12.5879C4.30469 8.16961 7.88641 4.58789 12.3047 4.58789C16.723 4.58789 20.3047 8.16961 20.3047 12.5879Z"
                                            fill="url(#paint0_linear_955_224851)" fill-opacity="0.99"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.71431C16.1338 9.91775 16.181 10.2947 15.9775 10.5563L12.7719 14.6778C12.2729 15.3193 11.3344 15.4026 10.7303 14.8589L8.70253 13.0339C8.45623 12.8122 8.43626 12.4328 8.65793 12.1865C8.87961 11.9402 9.25898 11.9203 9.50529 12.1419L11.533 13.9669C11.6193 14.0446 11.7534 14.0327 11.8247 13.941L15.0303 9.81955C15.2337 9.55799 15.6107 9.51086 15.8723 9.71431Z"
                                            fill="url(#paint1_linear_955_224851)" fill-opacity="0.99"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_224851" x1="12.3047" y1="10.3226" x2="12.3047"
                                                y2="26.1286" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_224851" x1="12.3039" y1="11.6059" x2="12.3039"
                                                y2="17.1681" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                    <div>Access to Expert Managed Funds</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="25" viewbox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12.5879C20.3047 17.0062 16.723 20.5879 12.3047 20.5879C7.88641 20.5879 4.30469 17.0062 4.30469 12.5879C4.30469 8.16961 7.88641 4.58789 12.3047 4.58789C16.723 4.58789 20.3047 8.16961 20.3047 12.5879Z"
                                            fill="url(#paint0_linear_955_224851)" fill-opacity="0.99"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.71431C16.1338 9.91775 16.181 10.2947 15.9775 10.5563L12.7719 14.6778C12.2729 15.3193 11.3344 15.4026 10.7303 14.8589L8.70253 13.0339C8.45623 12.8122 8.43626 12.4328 8.65793 12.1865C8.87961 11.9402 9.25898 11.9203 9.50529 12.1419L11.533 13.9669C11.6193 14.0446 11.7534 14.0327 11.8247 13.941L15.0303 9.81955C15.2337 9.55799 15.6107 9.51086 15.8723 9.71431Z"
                                            fill="url(#paint1_linear_955_224851)" fill-opacity="0.99"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_224851" x1="12.3047" y1="10.3226" x2="12.3047"
                                                y2="26.1286" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_224851" x1="12.3039" y1="11.6059" x2="12.3039"
                                                y2="17.1681" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                    <div>Real-Time Performance Tracking</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="25" viewbox="0 0 25 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12.5879C20.3047 17.0062 16.723 20.5879 12.3047 20.5879C7.88641 20.5879 4.30469 17.0062 4.30469 12.5879C4.30469 8.16961 7.88641 4.58789 12.3047 4.58789C16.723 4.58789 20.3047 8.16961 20.3047 12.5879Z"
                                            fill="url(#paint0_linear_955_224851)" fill-opacity="0.99"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.71431C16.1338 9.91775 16.181 10.2947 15.9775 10.5563L12.7719 14.6778C12.2729 15.3193 11.3344 15.4026 10.7303 14.8589L8.70253 13.0339C8.45623 12.8122 8.43626 12.4328 8.65793 12.1865C8.87961 11.9402 9.25898 11.9203 9.50529 12.1419L11.533 13.9669C11.6193 14.0446 11.7534 14.0327 11.8247 13.941L15.0303 9.81955C15.2337 9.55799 15.6107 9.51086 15.8723 9.71431Z"
                                            fill="url(#paint1_linear_955_224851)" fill-opacity="0.99"></path>
                                        <defs>
                                            <lineargradient id="paint0_linear_955_224851" x1="12.3047" y1="10.3226" x2="12.3047"
                                                y2="26.1286" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_955_224851" x1="12.3039" y1="11.6059" x2="12.3039"
                                                y2="17.1681" gradientunits="userSpaceOnUse">
                                                <stop stop-color="#03031E" stop-opacity="0.73"></stop>
                                                <stop offset="1" stop-color="#0D0E22" stop-opacity="0.29"></stop>
                                            </lineargradient>
                                        </defs>
                                    </svg></div>
                                    <div>AI-powered Personalised Strategies</div>
                                </li>
                            </ul>
                        </div>
                        <motion.div id="w-node-a18d496c-e967-bea8-ca36-825255d2d839-70c9e965"
                            initial={{ opacity: 0 }}
                            style={{ rotate: rotateValue1 }}
                            animate={controls}
                            data-w-id="a18d496c-e967-bea8-ca36-825255d2d839" className={`${styles.solution_cards} ${styles.card} ${styles.solutions_card_bg}`}><img
                                src="/solutions3.webp" loading="lazy" alt=""
                                className={styles.solutions_card_icon} />
                            <h3 className={styles.solutions_card_title}>For Traders</h3><img
                                src="/separater.webp" loading="lazy"
                                alt="" className={styles.solutions_card_divider} />
                            <ul role="list" className={`${styles.solutions_card_list} w-list-unstyled`}>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>20x Leverage on Futures &amp; Options</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>Access to AI-driven Sentiment Analysis and Insights</div>
                                </li>
                                <li className={styles.solutions_card_list_item}>
                                    <div className="w-embed"><svg width="25" height="24" viewbox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.08"
                                            d="M20.3047 12C20.3047 16.4183 16.723 20 12.3047 20C7.88641 20 4.30469 16.4183 4.30469 12C4.30469 7.58172 7.88641 4 12.3047 4C16.723 4 20.3047 7.58172 20.3047 12Z"
                                            fill="white"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M15.8723 9.12642C16.1338 9.32986 16.181 9.70682 15.9775 9.96839L12.7719 14.0899C12.2729 14.7314 11.3344 14.8147 10.7303 14.271L8.70253 12.446C8.45623 12.2243 8.43626 11.845 8.65793 11.5986C8.87961 11.3523 9.25898 11.3324 9.50529 11.5541L11.533 13.379C11.6193 13.4567 11.7534 13.4448 11.8247 13.3532L15.0303 9.23166C15.2337 8.97009 15.6107 8.92297 15.8723 9.12642Z"
                                            fill="white"></path>
                                    </svg></div>
                                    <div>Decentralized trading at its finest</div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Solutions