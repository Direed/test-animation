import {circOut, motion, useTransform} from "framer-motion";
import React from "react";

const RedVectorAnimated = ({
                               scrollYProgressFirstSection,
                               scrollYProgressSecondSection,
                               scrollYProgressLeaderBoardSection
                           }) => {
    //first section vectors
    const rotateRedVector = useTransform(scrollYProgressFirstSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });
    //vectors arrakis ecosystem section
    const translateXRedVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['0%', '0%'],{
        ease: circOut
    });
    const translateYRedVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['-60%', '0%'],{
        ease: circOut
    });
    //translate moon icon leader board section
    const translateYVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-60vh', '0%'],{
        ease: circOut
    });
    const translateXVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-100vh', '0%'],{
        ease: circOut
    });
    const rotateVectorsBeforeBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });

    return (
        <motion.div style={{ position: 'fixed', left: '-15%', bottom: '-45%', zIndex: 4, translateY: 0, rotate: rotateRedVector}}>
            <motion.div style={{translateY: translateYVectorsBeforeBoardSection, translateX: translateXVectorsBeforeBoardSection, rotate: rotateVectorsBeforeBoardSection}}>
                <motion.img
                    style={{ translateY: translateYRedVectorArrakis, translateX: translateXRedVectorArrakis}}
                    src={'/images/vectorRed.svg'}
                />
            </motion.div>
        </motion.div>
    )
}

export default RedVectorAnimated;