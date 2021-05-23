import styles from '../styles/About.module.css'
import { Animated } from "react-animated-css"
import Banner from '../components/Banner'

export default function About(props) {
    return (
        <div className={styles.container}>
            <Banner />
            <div className={styles.content_zone} >
                <h6 className={styles.subtitle} >About us</h6>
                <p className={styles.description} >CU blockchain society was founded in 2020 to educate and organize events in response to the great technological and financial changes following the advent of blockchain technology, both in the form of cryptocurrency, ICO, IEO, IDO, and NFT to strengthen the correct inclusion in the development of the blockchain system and use it in the future.</p>
            </div>
        </div>
    )
}