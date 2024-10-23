import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import styles from './Landing.module.css'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AllocationTable from '../../app/component/AllocationTable';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Tokenomics = () => {
    const defaultLabelColor = '#fff';
    const hoverLabelColor = '#101115';

    const intsToArray = (data) => data.split(',').map(item => parseFloat(item.trim()));
    const stringsToArray = (data) => data.split(',').map(item => item.trim());

    const data = {
        labels: stringsToArray("Seed, Private, KOL, Community, Public"),
        datasets: [{
            label: "B3X Token Allocation",
            data: intsToArray("5.71,7.71,1.17,3.13,2.29"),
            borderWidth: 4,
            spacing: 2,
            borderRadius: 6,
            borderColor: "rgba(0, 0, 0, 0)",
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            hoverBackgroundColor: stringsToArray("#2940a9, #a8abd3, #5fc5d7, #38e819, #1e66e3"),
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            datalabels: {
                color: defaultLabelColor,
                font: {
                    size: 10,
                },
                formatter: (value) => value + '%', // Display the value inside the segment
                anchor: 'center',
                align: 'center',
            },
        },
        onHover: (event, elements) => {
            if (elements.length > 0) {
                const activeIndex = elements[0].index;
                data.datasets[0].hoverBackgroundColor = data.datasets[0].hoverBackgroundColor.map(
                    (color, index) => (index === activeIndex ? hoverLabelColor : defaultLabelColor)
                );
            } else {
                data.datasets[0].hoverBackgroundColor = data.datasets[0].hoverBackgroundColor.map(() => defaultLabelColor);
            }
        },
        maintainAspectRatio: false
    };

    return (

        <section id="tokenomics" className="section_tokenomics pt-[120px] relative ">
            <div className={`${styles.w_container} w-layout-blockcontainer container tokenomics_container w-container xl:px-[180px] w-full block mx-auto max-w-[1440px]`}>
                <div className="tokenomics_wrapper">
                    <div className={styles.tokenomics_top}>
                        <div className={styles.label}>
                            <div className="label_text">Tokenomics</div>
                        </div>
                        <h2 className={styles.heading_style_h2}>B3X Token Allocation</h2>
                        <div className={styles.section_subtitle}>To achieve our goals, we’ve crafted a robust roadmap with clear milestones
                            strategically planned to guide us from initial development through public launch.</div>
                    </div>
                    <div className={styles.tokenomics_main_wrapper}>
                        <div className={`flex flex-col ${styles.tokenomics_main}`}>
                            <div className="flex justify-around">
                                <div className="w-dyn-list">
                                    <div role="list" className={`${styles.tokenomics_fields} w-dyn-items`}>
                                        <div role="listitem" className="w-dyn-item">
                                            <div chart_segment="chart-segment--is-orange" className={styles.tokenomics_field}>
                                                <div className={styles.tokenomics_field_left}>
                                                    <div style={{ backgroundColor: '#2940a9' }} className={styles.tokenomics_bullet_point}></div>
                                                    <div className={styles.tokenomics_field_percent}>5.71%</div>
                                                    <div className={styles.tokenomics_field_name}>Seed</div>
                                                </div>
                                                <div className={styles.tokenomics_field_amount}>57,142,850</div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div chart_segment="chart-segment--is-orange" className={styles.tokenomics_field}>
                                                <div className={styles.tokenomics_field_left}>
                                                    <div style={{ backgroundColor: '#a8abd3' }} className={styles.tokenomics_bullet_point}></div>
                                                    <div className={styles.tokenomics_field_percent}>7.71%</div>
                                                    <div className={styles.tokenomics_field_name}>Private</div>
                                                </div>
                                                <div className={styles.tokenomics_field_amount}>77,100,000</div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div chart_segment="chart-segment--is-orange" className={styles.tokenomics_field}>
                                                <div className={styles.tokenomics_field_left}>
                                                    <div style={{ backgroundColor: 'hsla(189, 60.03%, 60.80%, 1.00)' }} className={styles.tokenomics_bullet_point}>
                                                    </div>
                                                    <div className={styles.tokenomics_field_percent}>1.17%</div>
                                                    <div className={styles.tokenomics_field_name}>KOL</div>
                                                </div>
                                                <div className={styles.tokenomics_field_amount}>11,666,667</div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div chart_segment="chart-segment--is-orange" className={styles.tokenomics_field}>
                                                <div className={styles.tokenomics_field_left}>
                                                    <div style={{ backgroundColor: 'hsla(111, 81.86%, 50.38%, 1.00)' }} className={styles.tokenomics_bullet_point}>
                                                    </div>
                                                    <div className={styles.tokenomics_field_percent}>3.13%</div>
                                                    <div className={styles.tokenomics_field_name}>Community</div>
                                                </div>
                                                <div className={styles.tokenomics_field_amount}>31,250,000</div>
                                            </div>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <div chart_segment="chart-segment--is-orange" className={styles.tokenomics_field}>
                                                <div className={styles.tokenomics_field_left}>
                                                    <div style={{ backgroundColor: "hsla(218, 77.80%, 50.46%, 1.00)" }} className={styles.tokenomics_bullet_point}>
                                                    </div>
                                                    <div className={styles.tokenomics_field_percent}>2.29%</div>
                                                    <div className={styles.tokenomics_field_name}>Public</div>
                                                </div>
                                                <div className={styles.tokenomics_field_amount}>22,857,000</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="w-node-_75ad4af9-b073-017b-2437-820053e1e17a-70c9e965" className={styles.tokenomics_chart}>
                                    <div className="tokenomics_chart-image w-embed">
                                    </div>
                                    <div className="w-dyn-list">
                                        <div role="list" className="w-dyn-items">
                                            <div role="listitem" className="w-dyn-item">
                                                <div className="w-embed w-script">
                                                    <div>
                                                        <Doughnut data={data} options={options} height={300} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.tokenomics_number}>$ 5m</div>
                                </div>
                            </div>
                            <AllocationTable />
                        </div>
                        <div className="tokenomics_main-image-wrapper">
                            <img
                                src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5e_tokenomics-768.webp" loading="lazy"
                                sizes="100vw"
                                srcset="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5e_tokenomics-768.webp 500w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5e_tokenomics-768.webp 800w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5e_tokenomics-768.webp 1080w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5e_tokenomics-768.webp 2191w"
                                alt="" className="tokenomics_image" />
                            <img
                                src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5f_tokenomics-375.webp" loading="lazy"
                                sizes="100vw"
                                srcset="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5f_tokenomics-375.webp 500w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9ea5f_tokenomics-375.webp 702w"
                                alt="" className="tokenomics_image is-mobile" />
                        </div>
                        <img
                            src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect.webp" loading="lazy"
                            sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 88vw, (max-width: 1279px) 84vw, (max-width: 1439px) 86vw, 1080px"
                            srcset="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect.webp 500w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect-p-800.png 800w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect-p-1080.png 1080w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect-p-1600.png 1600w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bd_tokenomics_rect.webp 1681w"
                            alt="" className="tokenomics_main-outer-border" />
                    </div>
                </div>
            </div>
            <img src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp" loading="lazy"
                sizes="100vw"
                srcset="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 500w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 800w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 1080w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 1600w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 2000w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9bc_tokenomics-bg.webp 2881w"
                alt="" className="tokenomics_bg" />
            <img
                src="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9e3_tokenomics-bg-375.webp" loading="lazy" sizes="100vw"
                srcset="66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9e3_tokenomics-bg-375.webp 500w, 66d9977e72e7dfd970c9e964/66d9977e72e7dfd970c9e9e3_tokenomics-bg-375.webp 751w"
                alt="" className="tokenomics_bg is-mobile" />
            <div className="tokenomics_bottom-gradient">

            </div>
        </section>
    )
}

export default Tokenomics