import Head from 'next/head'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {Animated} from "react-animated-css"
import Box from '@material-ui/core/Box'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import BusinessIcon from '@material-ui/icons/Business'

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
        <link rel="icon" href="/cubs_icon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={2000} >
          <h1 className={styles.title}>
            <span className={styles.CU_title}>CU</span> Blockchain Society
          </h1>
        </Animated>
        <Animated animationIn="fadeInDownBig" animationInDelay={5000} animationInDuration={2000} animationOutDuration={2000} >
          <p className={styles.description}>
            A blockchain community in Chulalongkorn University for the interested people
          </p>
        </Animated>
      </main>
      <div className={styles.front_parallax} >
        <Box container className={styles.content_row} >
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <AccessAlarmIcon style={{ fontSize: "10rem" }} />
            </div>
          </Box>
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <h6 className={styles.subtitle} >Our goal</h6>
              <p className={styles.content}>
                Nulla minim dolore consectetur sit sit reprehenderit ex anim Minim aute cillu
              </p>
            </div>
          </Box>
        </Box>
        <Box container className={styles.content_row} >
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <BusinessIcon style={{ fontSize: "10rem" }} />
            </div>
          </Box>
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <h6 className={styles.subtitle} >Our goal</h6>
              <p className={styles.content}>
                Nulla minim dolore consectetur sit sit reprehenderit ex anim Minim aute cillu
              </p>
            </div>
          </Box>
        </Box>
      </div>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
