import {circOut, motion, useTransform} from "framer-motion";
import React from "react";

const MoonAnimated = ({
                          scrollYProgressFirstSection,
                          scrollYProgressSecondSection,
                          scrollYProgressThirdSection,
                          scrollYProgressLeaderBoardSection
                      }) => {
    //moon icon first section
    const bottomMoonIcon = useTransform(scrollYProgressFirstSection, [1, 0], ['50%', '-5%'],{
        ease: circOut
    });
    const translateMoonIcon = useTransform(scrollYProgressFirstSection, [1, 0], ['50%', '0'],{
        ease: circOut
    });
    //moon icon second section
    const bottomMoonIconSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], ['60%', '0%'],{
        ease: circOut
    });
    const translateMoonIconSecondSection = useTransform(scrollYProgressSecondSection, [1, 0], ['50%', '0%'],{
        ease: circOut
    });
    //hide second section before third section
    const translateMoonIconThirdSection = useTransform(scrollYProgressThirdSection, [1, 0], ['-15%', '0%'],{
        ease: circOut
    });
    //translate moon icon leader board section
    const translateMoonIconLeaderBoardSection = useTransform(scrollYProgressLeaderBoardSection, [1, 0], ['-55%', '0%'],{
        ease: circOut
    });

    return (
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
    )
}

export default MoonAnimated;