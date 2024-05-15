'use client';

import styles from "./page.module.css";
import {useScroll} from "framer-motion";
import React, {useEffect, useRef} from "react";
import MenuBar from "@/components/MenuBar";
import HomeAnimated from "@/components/HomeAnimated";
import StatsBlocksAnimated from "@/components/StatsBlocksAnimated";
import ArrakisAiAnimated from "@/components/ArrakisAiAnimated";
import CrowdsourcingAnimated from "@/components/CrowdsourcingAnimated";
import MoonAnimated from "@/components/MoonAnimated";
import CometaAnimated from "@/components/CometaAnimated";
import RedVectorAnimated from "@/components/RedVectorAnimated";
import BlueVectorAnimated from "@/components/BlueVectorAnimated";
import LeaderBoardAnimated from "@/components/LeaderBoardAnimated";

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

    useEffect(() => {
        history.scrollRestoration = "manual"
    }, [])

    return (
        <main className={styles.main}>
            <MenuBar
                scrollYProgressSecondSection={scrollYProgressSecondSection}
            />

            <HomeAnimated
                scrollYProgressFirstSection={scrollYProgressFirstSection}
                scrollYProgressSecondSection={scrollYProgressSecondSection}
            />

            <StatsBlocksAnimated
                scrollYProgressFirstSection={scrollYProgressFirstSection}
                scrollYProgressSecondSection={scrollYProgressSecondSection}
            />

            <ArrakisAiAnimated
                scrollYProgressSecondSection={scrollYProgressSecondSection}
                scrollYProgressThirdSection={scrollYProgressThirdSection}
            />

            <CrowdsourcingAnimated
                scrollYProgressThirdSection={scrollYProgressThirdSection}
                scrollYProgressLeaderBoardSection={scrollYProgressLeaderBoardSection}
            />

            <MoonAnimated
                scrollYProgressFirstSection={scrollYProgressFirstSection}
                scrollYProgressSecondSection={scrollYProgressSecondSection}
                scrollYProgressThirdSection={scrollYProgressThirdSection}
                scrollYProgressLeaderBoardSection={scrollYProgressLeaderBoardSection}
            />

            <CometaAnimated
                scrollYProgressThirdSection={scrollYProgressThirdSection}
            />

            <RedVectorAnimated
                scrollYProgressFirstSection={scrollYProgressFirstSection}
                scrollYProgressSecondSection={scrollYProgressSecondSection}
                scrollYProgressLeaderBoardSection={scrollYProgressLeaderBoardSection}
            />

            <BlueVectorAnimated
                scrollYProgressFirstSection={scrollYProgressFirstSection}
                scrollYProgressSecondSection={scrollYProgressSecondSection}
                scrollYProgressLeaderBoardSection={scrollYProgressLeaderBoardSection}
            />

            <LeaderBoardAnimated
                scrollYProgressLeaderBoardSection={scrollYProgressLeaderBoardSection}
            />

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
