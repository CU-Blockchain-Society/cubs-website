import Head from 'next/head'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { Animated } from "react-animated-css"
import Box from '@material-ui/core/Box'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BusinessIcon from '@material-ui/icons/Business'
import Aos from "aos"
import "aos/dist/aos.css"
import FacebookIcon from '@material-ui/icons/Facebook'
import FlagIcon from '@material-ui/icons/Flag'

export default function Home(props) {
  const [presentPos, setPresentPos] = useState(0)
  useEffect(() => {
    Aos.init({ duration: 1000 })
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
      <div className={styles.content_zone} >
        <Box data-aos="fade-up" container className={styles.content_row} >
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <PeopleAltIcon style={{ fontSize: "10rem" }} />
            </div>
          </Box>
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <h6 className={styles.subtitle} >Who are we?</h6>
              <p className={styles.content}>
                Nulla minim dolore consectetur sit sit reprehenderit ex anim Minim aute cillu
              </p>
            </div>
          </Box>
        </Box>
        <Box data-aos="fade-up" container className={styles.content_row} >
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <FlagIcon style={{ fontSize: "10rem" }} />
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
      <div className={styles.sponsors_zone} >
        <h6 className={styles.subtitle} >Supported by</h6>
        <div className={styles.sponsors_wrap} >
          <div className={styles.sponsor_logo} >
            <img src="cuihub.png" alt="CU innovation hub" width="150" height="150"></img>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <h6 className={styles.contact_title} >Contact us</h6>
        <p>contact@cublockchainsociety.com</p>
        <a href="https://www.facebook.com/cubs2020" alt="cubs" ><FacebookIcon /> CU Blockchain Society</a>
      </footer>
    </div>
  )
}
