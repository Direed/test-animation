import {circOut, motion, useTransform} from "framer-motion";
import styles from "@/app/page.module.css";
import Image from "next/image";

const ArrakisAiAnimated = ({
                               scrollYProgressSecondSection,
                               scrollYProgressThirdSection,
                           }) => {
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

    return (
        <motion.div className={styles.companiesSection} style={{translateY: translateArrakisAiSection, opacity: opacityArrakisAiSection}}>
            <motion.div className={styles.companiesSectionWrapper} style={{translateY: translateArrakisAiSectionBeforeThird, opacity: opacityArrakisAiSectionBeforeThird}}>
                <p>Projects integrated into the Arrakis AI Ecosystem</p>
                <motion.div className={styles.companiesWrapper} style={{translateX: translateArrakisImagesSection}}>
                    <motion.div className={styles.companiesWrapperMotion} style={{translateX: translateArrakisImagesSectionBeforeThird}}>
                        <Image
                            src={'/images/solana.svg'}
                            alt={'solana'}
                            width={334}
                            height={50}
                        />
                        <Image
                            src={'/images/arweave.svg'}
                            alt={'arweave'}
                            width={421}
                            height={100}
                        />
                        <Image
                            src={'/images/bittensor.svg'}
                            alt={'bittensor'}
                            width={328}
                            height={58}
                        />
                        <Image
                            src={'/images/redcircle.svg'}
                            alt={'redcircle'}
                            width={102}
                            height={102}
                        />
                        <Image
                            src={'/images/telegram.svg'}
                            alt={'telegram'}
                            width={102}
                            height={102}
                        />
                        <Image
                            src={'/images/solana.svg'}
                            alt={'solana'}
                            width={334}
                            height={50}
                        />
                        <Image
                            src={'/images/arweave.svg'}
                            alt={'arweave'}
                            width={421}
                            height={100}
                        />
                        <Image
                            src={'/images/bittensor.svg'}
                            alt={'bittensor'}
                            width={328}
                            height={58}
                        />
                        <Image
                            src={'/images/redcircle.svg'}
                            alt={'redcircle'}
                            width={102}
                            height={102}
                        />
                        <Image
                            src={'/images/telegram.svg'}
                            alt={'telegram'}
                            width={102}
                            height={102}
                        />
                        <Image
                            src={'/images/solana.svg'}
                            alt={'solana'}
                            width={334}
                            height={50}
                        />
                        <Image
                            src={'/images/arweave.svg'}
                            alt={'arweave'}
                            width={421}
                            height={100}
                        />
                        <Image
                            src={'/images/bittensor.svg'}
                            alt={'bittensor'}
                            width={328}
                            height={58}
                        />
                        <Image
                            src={'/images/redcircle.svg'}
                            alt={'redcircle'}
                            width={102}
                            height={102}
                        />
                        <Image
                            src={'/images/telegram.svg'}
                            alt={'telegram'}
                            width={102}
                            height={102}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ArrakisAiAnimated;