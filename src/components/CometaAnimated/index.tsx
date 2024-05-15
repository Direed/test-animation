import {circOut, motion, useTransform} from "framer-motion";
import styles from "@/app/page.module.css";
import React from "react";

const CometaAnimated = ({scrollYProgressThirdSection}) => {
    //hide second section before third section
    const translateThirdSectionComet = useTransform(scrollYProgressThirdSection, [1, 0], ['150vw', '0vw'],{
        ease: circOut
    });

    return (
        <motion.div className={styles.comet} style={{translateX: translateThirdSectionComet}}>
        </motion.div>
    )
}

export default CometaAnimated