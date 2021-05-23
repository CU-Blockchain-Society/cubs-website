import styles from '../styles/Home.module.css'
import { Animated } from "react-animated-css"

export default function Banner() {
    return (
        <main className={styles.main}>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={2000} >
            <h1 className={styles.title}>
                <span className={styles.CU_title}>CU</span> Blockchain Society
            </h1>
            </Animated>
            <Animated animationIn="fadeInDownBig" animationInDelay={5000} animationInDuration={2000} animationOutDuration={2000} >
            <p className={styles.description}>
                A blockchain community in Chulalongkorn University for the future seeker
            </p>
            </Animated>
        </main>
    )
}