import styles from './styles.module.css';

import BoardRow from "@/components/LeaderBoard/components/BoardRow";
import BoardHeader from "@/components/LeaderBoard/components/BoardHeader";
import ScrollToTop from "@/components/ScrollToTop";
import {useEffect, useState} from "react";

const HEADERS = [
    '#',
    'Model Name',
    'Average',
    'ARC',
    'HellaSwag',
    'MMLU',
    'TruthfulQA',
    'Winogrande',
    'GSM8K',
    'Usage'
]

const DATA = [
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
]

const LeaderBoard = () => {
    const [isToTop, setIsToTop] = useState(false);

    useEffect(() => {
        const boardRows = document.querySelector('#board-rows');

        const changeRotation = (e) => {
            if(e.target.scrollTop < (e.target.scrollHeight - (e.target.clientHeight + 6) )) {
                setIsToTop(false);
            } else {
                setIsToTop(true)
            }
        }
        boardRows.addEventListener('scroll', changeRotation)

        return () => boardRows.removeEventListener('scroll', changeRotation)
    }, [])

    const handleScrollToTop = () => {
        const boardRows = document.querySelector('#board-rows');

        if(boardRows?.scrollTop >= (boardRows?.scrollHeight - (boardRows?.clientHeight + 6))) {
            boardRows.scrollTo({
                top: boardRows?.scrollTop - (boardRows?.clientHeight + 6),
                left: 0,
                behavior: 'smooth'
            });
        } else {
            boardRows.scrollTo({
                top: boardRows?.scrollTop + (boardRows?.clientHeight + 6),
                left: 0,
                behavior: 'smooth'
            });
        }

    }

    return (
        <div className={styles.board}>
            <BoardHeader headers={HEADERS} />
            <div id={'board-rows'} className={styles.rows}>
                {DATA.map((data_item, index) => (
                    <BoardRow data={{...data_item, number: index + 1}} />
                ))}
            </div>
            <div className={styles.scrollToTopWrapper}>
                <ScrollToTop isToTop={isToTop} handleClick={handleScrollToTop} />
            </div>
        </div>
    )
}

export default LeaderBoard;