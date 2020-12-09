import Head from 'next/head'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {Animated} from "react-animated-css"
import Grid from '@material-ui/core/Grid';

export default function Home(props) {
  const [presentPos, setPresentPos] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setPresentPos(window.pageYOffset)
    }, 200)
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <title>CU Blockchain Society</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration="2000" animationOutDuration="2000" >
          <h1 className={styles.title}>
            <span className={styles.CU_title}>CU</span> Blockchain Society
          </h1>
        </Animated>
        <Animated animationIn="fadeInDownBig" animationInDelay="5000" animationInDuration="2000" animationOutDuration="2000" >
          <p className={styles.description}>
            A blockchain community in Chulalongkorn University for the interested people
          </p>
        </Animated>
      </main>
      <div className={styles.front_parallax} >
        <Grid container>
          <Grid item xs={6}>
            <div className={styles.paper}></div>
          </Grid>
          <Grid item xs={6}>
            <div className={styles.paper}>
              <h6 className={styles.subtitle} >Our goal</h6>
              <p className={styles.description}>
                Nulla minim dolore consectetur sit sit reprehenderit ex anim. Minim aute cillu.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
