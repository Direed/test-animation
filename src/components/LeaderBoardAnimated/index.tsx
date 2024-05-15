import {circOut, motion, useTransform} from "framer-motion";
import styles from "@/app/page.module.css";
import Button from "@/components/Button";
import LeaderBoard from "@/components/LeaderBoard";
import React from "react";

const LeaderBoardAnimated = ({
                                 scrollYProgressLeaderBoardSection
                             }) => {
    //translate moon icon leader board section
    const translateYBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-95vh', '0'],{
        ease: circOut
    });
    const opacityBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], [1, 0],{
        ease: circOut
    });

    return (
        <motion.div className={styles.leaderboardSection} style={{position: 'fixed', top: '100vh', zIndex: 6, maxWidth: 1760, width: '100%', translateY: translateYBoardSection, opacity: opacityBoardSection}}>
            <div className={styles.leaderboardTitle}>
                <h1>LLM Leaderboard</h1>
                <Button>Submit your model</Button>
            </div>
            <p>We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.</p>
            <LeaderBoard />
        </motion.div>
    )
}

export default LeaderBoardAnimated;