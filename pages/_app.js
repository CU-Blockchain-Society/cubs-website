import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import FacebookIcon from '@material-ui/icons/Facebook'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <title>CU Blockchain Society</title>
        <link rel="icon" href="/cubs_icon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <div className={styles.footer_item}>
          <h6 className={styles.contact_title} >Contact us</h6>
          <p>contact@cublockchainsociety.com</p>
          <a href="https://www.facebook.com/cubs2020" alt="cubs" ><FacebookIcon /> CU Blockchain Society</a>
        </div>
      </footer>
    </div>
  )
}

export default MyApp
