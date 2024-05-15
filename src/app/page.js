'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import {circOut, motion, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";
import StatBlock from "@/components/StatBlock";
import LeaderBoard from "@/components/LeaderBoard";


export default function Home() {
    const refFirstSection = useRef(null);
    const refSecondSection = useRef(null);
    const refThirdSection = useRef(null);
    const refLeaderBoardSection = useRef(null);

    const { scrollYProgress: scrollYProgressFirstSection } = useScroll({
        target: refFirstSection,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressSecondSection } = useScroll({
        target: refSecondSection,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressThirdSection } = useScroll({
        target: refThirdSection,
        offset: ["start end", "end end"]
    })

    const { scrollYProgress: scrollYProgressLeaderBoardSection } = useScroll({
        target: refLeaderBoardSection,
        offset: ["start end", "end end"]
    })

    //moon icon first section
    const bottomMoonIcon = useTransform(scrollYProgressFirstSection, [1, 0], ['50%', '-5%'],{
        ease: circOut
    });
    const translateMoonIcon = useTransform(scrollYProgressFirstSection, [1, 0], ['50%', '0'],{
        ease: circOut
    });

    //first section vectors
    const rotateRedVector = useTransform(scrollYProgressFirstSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });

    const rotateBlueVector = useTransform(scrollYProgressFirstSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });

    //first section
    const topFirstSection = useTransform(scrollYProgressFirstSection, [1, 0], ['40%', '50%'],{
        ease: circOut
    });
    const fontSizeH1FirstSection = useTransform(scrollYProgressFirstSection, [1, 0], ['125px', '128px'],{
        ease: circOut
    });
    const firstColorH1FirstSection = useTransform(scrollYProgressFirstSection, [1, 0], ['#FFD6F9', '#B53EA4'],{
        ease: circOut
    });
    const secondColorH1FirstSection = useTransform(scrollYProgressFirstSection, [1, 0], ['#FFCBB4', '#FC6F32'],{
        ease: circOut
    });
    const thirdColorH1FirstSection = useTransform(scrollYProgressFirstSection, [1, 0], ['#FFBEC3', '#FF4A59'],{
        ease: circOut
    });

    //first section stats blocks
    const bottomStatsBlocks = useTransform(scrollYProgressFirstSection, [1, 0], ['10%', '-20%'],{
        ease: circOut
    });
    const translateStatsBlocks = useTransform(scrollYProgressFirstSection, [1, 0], ['10%', '0'],{
        ease: circOut
    });

    //first section second stat block
    const bottomSecondStatBlock = useTransform(scrollYProgressFirstSection, [1, 0], ['0px', '-200px'],{
        ease: circOut
    });

    //third section second stat block
    const bottomThirdStatBlock = useTransform(scrollYProgressFirstSection, [1, 0], ['0px', '-400px'],{
        ease: circOut
    });

    //moon icon second section
    const bottomMoonIconSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], ['60%', '0%'],{
        ease: circOut
    });
    const translateMoonIconSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], ['50%', '0%'],{
        ease: circOut
    });

    //second section opacity for first section
    const opacityFirstSection = useTransform(scrollYProgressSecondSection, [1, 0], [0, 1],{
        ease: circOut
    });
    const topSecondSectionForFirstSection = useTransform(scrollYProgressSecondSection, [1, 0], ['50%', '0%'],{
        ease: circOut
    });
    const translateSecondSectionForFirstSection = useTransform(scrollYProgressSecondSection, [1, 0], ['-150%', '-50%'],{
        ease: circOut
    });

    //stats blocks second section
    const opacityStatsBlocksSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], [0, 1],{
        ease: circOut
    });
    const translateStatsBlocksSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], ['-300%', '0'],{
        ease: circOut
    });

    //second section second stat block
    const translateSecondStatBlock = useTransform(scrollYProgressSecondSection, [1, 0], ['50%', '0%'],{
        ease: circOut
    });

    //second section third stat block
    const translateThirdStatBlock = useTransform(scrollYProgressSecondSection, [1, 0], ['100%', '0%'],{
        ease: circOut
    });

    //arrakis ai ecosystem section showing
    const opacityArrakisAiSection = useTransform(scrollYProgressSecondSection, [1, 0.5], [1, 0],{
        ease: circOut
    });
    const translateArrakisAiSection = useTransform(scrollYProgressSecondSection, [1, 0.5], ['-70vh', '0%'],{
        ease: circOut
    });
    const translateArrakisImagesSection = useTransform(scrollYProgressSecondSection, [1, 0.5], ['0px', '514px'],{
        ease: circOut
    });

    //vectors arrakis ecosystem section
    const translateXRedVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['0%', '0%'],{
        ease: circOut
    });
    const translateYRedVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['-60%', '0%'],{
        ease: circOut
    });
    const rotateBlueVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });
    const translateYBlueVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['-30%', '0%'],{
        ease: circOut
    });

    scrollYProgressSecondSection.on('change', (value) => {
        const menuBar = document.querySelector('#menu-bar');
        if(value > 0) {
            menuBar.style.display = 'none';
        } else {
            menuBar.style.display = 'flex';
        }
    })

    //hide second section before third section
    const opacityArrakisAiSectionBeforeThird = useTransform(scrollYProgressThirdSection, [1, 0], [0, 1],{
        ease: circOut
    });
    const translateArrakisAiSectionBeforeThird = useTransform(scrollYProgressThirdSection, [1, 0], ['-350%', '0%'],{
        ease: circOut
    });
    const translateArrakisImagesSectionBeforeThird = useTransform(scrollYProgressThirdSection, [1, 0], ['-454px', '0px'],{
        ease: circOut
    });
    const translateMoonIconThirdSection = useTransform(scrollYProgressThirdSection, [1, 0], ['-15%', '0%'],{
        ease: circOut
    });
    const opacityThirdSection = useTransform(scrollYProgressThirdSection, [1, 0], [1, 0],{
        ease: circOut
    });
    const translateThirdSection = useTransform(scrollYProgressThirdSection, [1, 0.1], ['-90vh', '0%'],{
        ease: circOut
    });
    const translateThirdSectionComet = useTransform(scrollYProgressThirdSection, [1, 0], ['150vw', '0vw'],{
        ease: circOut
    });


    //translate moon icon leader board section
    const translateMoonIconLeaderBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-55%', '0%'],{
        ease: circOut
    });
    const translateYThirdSectionBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-300%', '0%'],{
        ease: circOut
    });
    const opacityThirdSectionBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], [0, 1],{
        ease: circOut
    });
    const translateYVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-60vh', '0%'],{
        ease: circOut
    });
    const translateXVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-100vh', '0%'],{
        ease: circOut
    });
    const rotateVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });
    const translateYBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-95vh', '0'],{
        ease: circOut
    });
    const opacityBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], [1, 0],{
        ease: circOut
    });




    useEffect(() => {
        history.scrollRestoration = "manual"
    }, [])

    return (
        <main className={styles.main}>
            <div id={'menu-bar'} className={styles.menu}>
                <Button size={'small'} isTransparent >How It Works</Button>
                <Button size={'small'} >Buy Salt AI</Button>
            </div>

            <motion.div className={styles.firstSection} style={{top: topFirstSection}}>
                <motion.div className={styles.firstSectionWrapper} style={{opacity: opacityFirstSection, top: topSecondSectionForFirstSection, translateY: translateSecondSectionForFirstSection}}>
                    <motion.h1 style={{
                        fontSize: fontSizeH1FirstSection,
                        lineHeight: fontSizeH1FirstSection,
                        background: useMotionTemplate`-webkit-linear-gradient(-81deg, ${firstColorH1FirstSection}, ${secondColorH1FirstSection}, ${thirdColorH1FirstSection})`,
                    }}>A new economic primitive for funding decentralized AI</motion.h1>
                    <p>We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI</p>
                    <div style={{display: "flex", gap: 24}}>
                        <Button>Buy Salt AI</Button>
                        <Button isTransparent >Try Now</Button>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div style={{position: "fixed", left: 80, bottom: bottomStatsBlocks, translateY: translateStatsBlocks, zIndex: 6, display: "flex", gap: 34, maxWidth: 1760, width: '100%'}}>
                <motion.div style={{display: "flex", gap: 34, maxWidth: 1760, width: '100%', translateY: translateStatsBlocksSecondSection, opacity: opacityStatsBlocksSecondSection}}>
                    <StatBlock title={'1,873'} description={'LLM models'} />
                    <motion.div style={{width: '100%', position: 'relative', bottom: bottomSecondStatBlock}}>
                        <motion.div style={{width: '100%', position: 'relative', translateY: translateSecondStatBlock}}>
                            <StatBlock title={'$326,734'} description={'Paid to data scientists'} />
                        </motion.div>
                    </motion.div>
                    <motion.div style={{width: '100%', position: 'relative', bottom: bottomThirdStatBlock}}>
                        <motion.div style={{width: '100%', position: 'relative', translateY: translateThirdStatBlock}}>
                            <StatBlock title={'6,557'} description={'Developers'} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className={styles.companiesSection} style={{translateY: translateArrakisAiSection, opacity: opacityArrakisAiSection}}>
                <motion.div className={styles.companiesSectionWrapper} style={{translateY: translateArrakisAiSectionBeforeThird, opacity: opacityArrakisAiSectionBeforeThird}}>
                    <p>Projects integrated into the Arrakis AI Ecosystem</p>
                    <motion.div className={styles.companiesWrapper} style={{translateX: translateArrakisImagesSection}}>
                        <motion.div className={styles.companiesWrapperMotion} style={{translateX: translateArrakisImagesSectionBeforeThird}}>
                            <Image
                                src={'/images/solana.svg'}
                                width={334}
                                height={50}
                            />
                            <Image
                                src={'/images/arweave.svg'}
                                width={421}
                                height={100}
                            />
                            <Image
                                src={'/images/bittensor.svg'}
                                width={328}
                                height={58}
                            />
                            <Image
                                src={'/images/redcircle.svg'}
                                width={102}
                                height={102}
                            />
                            <Image
                                src={'/images/telegram.svg'}
                                width={102}
                                height={102}
                            />
                            <Image
                                src={'/images/solana.svg'}
                                width={334}
                                height={50}
                            />
                            <Image
                                src={'/images/arweave.svg'}
                                width={421}
                                height={100}
                            />
                            <Image
                                src={'/images/bittensor.svg'}
                                width={328}
                                height={58}
                            />
                            <Image
                                src={'/images/redcircle.svg'}
                                width={102}
                                height={102}
                            />
                            <Image
                                src={'/images/telegram.svg'}
                                width={102}
                                height={102}
                            />
                            <Image
                                src={'/images/solana.svg'}
                                width={334}
                                height={50}
                            />
                            <Image
                                src={'/images/arweave.svg'}
                                width={421}
                                height={100}
                            />
                            <Image
                                src={'/images/bittensor.svg'}
                                width={328}
                                height={58}
                            />
                            <Image
                                src={'/images/redcircle.svg'}
                                width={102}
                                height={102}
                            />
                            <Image
                                src={'/images/telegram.svg'}
                                width={102}
                                height={102}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className={styles.crowdsourcingSection} style={{translateY: translateThirdSection, opacity: opacityThirdSection}}>
                <motion.div className={styles.crowdsourcingSectionWrapper} style={{translateY: translateYThirdSectionBeforeBoardSection, opacity: opacityThirdSectionBeforeBoardSection}}>
                    <h1>Crowdsourcing our collective intelligence to build the best AI</h1>
                    <p>Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.</p>
                    <p>Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.</p>
                    <Button>Use The Cutting Edge AI</Button>
                </motion.div>
            </motion.div>

            <motion.div
                style={{ position: 'fixed', width: 1016, height: 1016, right: 0, bottom: bottomMoonIcon, zIndex: 3, translateY: translateMoonIcon}}
            >
                <motion.div
                    style={{position: 'fixed', width: 1016, height: 1016, right:0, zIndex: 3, bottom: bottomMoonIconSecondSection, translateY: translateMoonIconSecondSection}}
                >
                    <motion.div style={{translateY: translateMoonIconThirdSection}}>
                        <motion.div style={{translateY: translateMoonIconLeaderBoardSection}}>
                            <motion.img
                                src={'/images/moon.png'}
                                width={1016}
                                height={1016}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className={styles.comet} style={{translateX: translateThirdSectionComet}}>

            </motion.div>


            <motion.div style={{ position: 'fixed', left: '-15%', bottom: '-45%', zIndex: 4, translateY: 0, rotate: rotateRedVector}}>
                <motion.div style={{translateY: translateYVectorsBeforeBoardSection, translateX: translateXVectorsBeforeBoardSection, rotate: rotateVectorsBeforeBoardSection}}>
                    <motion.img
                        style={{ translateY: translateYRedVectorArrakis, translateX: translateXRedVectorArrakis}}
                        src={'/images/vectorRed.svg'}
                    />
                </motion.div>
            </motion.div>

            <motion.div style={{ position: 'fixed', left: '20%', top: '-35%', zIndex: 4, translateY: 0, rotate: rotateBlueVector}}>
                <motion.div style={{translateY: translateYVectorsBeforeBoardSection, translateX: translateXVectorsBeforeBoardSection, rotate: rotateVectorsBeforeBoardSection}}>
                    <motion.img
                        style={{ rotate: rotateBlueVectorArrakis, translateY: translateYBlueVectorArrakis}}
                        src={'/images/vectorBlue.svg'}
                    />
                </motion.div>
            </motion.div>

            <motion.div className={styles.leaderboardSection} style={{position: 'fixed', top: '100vh', zIndex: 6, maxWidth: 1760, width: '100%', translateY: translateYBoardSection, opacity: opacityBoardSection}}>
                <div className={styles.leaderboardTitle}>
                    <h1>LLM Leaderboard</h1>
                    <Button>Submit your model</Button>
                </div>
                <p>We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.</p>
                <LeaderBoard />
            </motion.div>

            <div className={styles.timelines} style={{position: "absolute", width: '100%'}}>
                <div style={{height: '100vh'}}></div>
                <div ref={refFirstSection} style={{height: '100vh'}}></div>
                <div ref={refSecondSection} style={{height: '100vh'}}></div>
                <div ref={refThirdSection} style={{height: '100vh'}}></div>
                <div ref={refLeaderBoardSection} style={{height: '100vh'}}></div>
            </div>
        </main>
    );
}
