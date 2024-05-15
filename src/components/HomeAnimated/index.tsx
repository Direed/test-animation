import {circOut, motion, useMotionTemplate, useTransform} from "framer-motion";
import styles from "@/app/page.module.css";
import Button from "@/components/Button";

const HomeAnimated = ({
                                  scrollYProgressFirstSection,
                                  scrollYProgressSecondSection
                              }) => {
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

    return (
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
    )
}

export default HomeAnimated;