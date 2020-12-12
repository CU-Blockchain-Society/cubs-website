import styles from '../styles/About.module.css'
import { Animated } from "react-animated-css"
import Banner from '../components/Banner'

export default function About(props) {
    return (
        <div className={styles.container}>
            <Banner />
            <div className={styles.content_zone} >
                <h6 className={styles.subtitle} >About us</h6>
                <p className={styles.description} >Amet sunt consequat ea consequat culpa fugiat commodo id Lorem deserunt labore laborum commodo enim. Nostrud elit eiusmod fugiat exercitation laborum adipisicing reprehenderit. Amet incididunt consectetur ea elit incididunt consequat ipsum sit adipisicing eiusmod. Sint duis deserunt proident sint irure culpa Lorem consectetur commodo esse et adipisicing nisi cillum.</p>
            </div>
        </div>
    )
}