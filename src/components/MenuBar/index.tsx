import styles from "./styles.module.css";
import Button from "@/components/Button";

const MenuBar = ({scrollYProgressSecondSection}) => {
    scrollYProgressSecondSection.on('change', (value) => {
        const menuBar = document.querySelector<HTMLElement>('#menu-bar');
        if(value > 0) {
            menuBar.style.display = 'none';
        } else {
            menuBar.style.display = 'flex';
        }
    })

    return (
        <div id={'menu-bar'} className={styles.menu}>
            <Button size={'small'} isTransparent >How It Works</Button>
            <Button size={'small'} >Buy Salt AI</Button>
        </div>
    )
}

export default MenuBar;