import {circOut, motion, useTransform} from "framer-motion";
import React from "react";

const BlueVectorAnimated = ({
                                scrollYProgressFirstSection,
                                scrollYProgressSecondSection,
                                scrollYProgressLeaderBoardSection
                            }) => {
    //first section vectors
    const rotateBlueVector = useTransform(scrollYProgressFirstSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });
    //vectors arrakis ecosystem section
    const rotateBlueVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['45deg', '0deg'],{
        ease: circOut
    });
    const translateYBlueVectorArrakis = useTransform(scrollYProgressSecondSection, [1, 0], ['-30%', '0%'],{
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
        <motion.div style={{ position: 'fixed', left: '20%', top: '-35%', zIndex: 4, translateY: 0, rotate: rotateBlueVector}}>
            <motion.div style={{translateY: translateYVectorsBeforeBoardSection, translateX: translateXVectorsBeforeBoardSection, rotate: rotateVectorsBeforeBoardSection}}>
                <motion.img
                    style={{ rotate: rotateBlueVectorArrakis, translateY: translateYBlueVectorArrakis}}
                    src={'/images/vectorBlue.svg'}
                />
            </motion.div>
        </motion.div>
    )
}

export default BlueVectorAnimated;