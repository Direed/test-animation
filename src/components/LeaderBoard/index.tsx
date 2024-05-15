import {useEffect, useState} from "react";

import styles from './styles.module.css';

import BoardRow from "@/components/LeaderBoard/components/BoardRow";
import BoardHeader from "@/components/LeaderBoard/components/BoardHeader";
import ScrollToTop from "@/components/ScrollToTop";

import {DATA, HEADERS} from "@/constants/leaderBoard.constants";

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
                    <BoardRow key={index} data={{...data_item, number: index + 1}} />
                ))}
            </div>
            <div className={styles.scrollToTopWrapper}>
                <ScrollToTop isToTop={isToTop} handleClick={handleScrollToTop} />
            </div>
        </div>
    )
}

export default LeaderBoard;