import {circOut, motion, useTransform} from "framer-motion";
import styles from "@/app/page.module.css";
import Button from "@/components/Button";
import React from "react";

const CrowdsourcingAnimated = ({
                                   scrollYProgressThirdSection,
                                   scrollYProgressLeaderBoardSection
                               }) => {
    //hide second section before third section
    const opacityThirdSection = useTransform(scrollYProgressThirdSection, [1, 0], [1, 0],{
        ease: circOut
    });
    const translateThirdSection = useTransform(scrollYProgressThirdSection, [1, 0.1], ['-90vh', '0%'],{
        ease: circOut
    });
    //translate moon icon leader board section
    const translateYThirdSectionBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-300%', '0%'],{
        ease: circOut
    });
    const opacityThirdSectionBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], [0, 1],{
        ease: circOut
    });

    return (
        <motion.div className={styles.crowdsourcingSection} style={{translateY: translateThirdSection, opacity: opacityThirdSection}}>
            <motion.div className={styles.crowdsourcingSectionWrapper} style={{translateY: translateYThirdSectionBeforeBoardSection, opacity: opacityThirdSectionBeforeBoardSection}}>
                <h1>Crowdsourcing our collective intelligence to build the best AI</h1>
                <p>Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.</p>
                <p>Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.</p>
                <Button>Use The Cutting Edge AI</Button>
            </motion.div>
        </motion.div>
    )
}

export default CrowdsourcingAnimated;