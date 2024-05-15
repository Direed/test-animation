import {circOut, motion, useTransform} from "framer-motion";
import StatBlock from "@/components/StatBlock";

const StatsBlocksAnimated = ({
                                 scrollYProgressFirstSection,
                                 scrollYProgressSecondSection
}) => {
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

    return (
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
    )
}

export default StatsBlocksAnimated;