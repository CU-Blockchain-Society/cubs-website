import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { Animated } from "react-animated-css"
import { Box, Button } from '@material-ui/core'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Aos from "aos"
import "aos/dist/aos.css"
import FlagIcon from '@material-ui/icons/Flag'
import TimelineIcon from '@material-ui/icons/Timeline'

export default function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className={styles.container}>
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
        <Box data-aos="fade-up" className={styles.content_row} >
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
        <Box data-aos="fade-up" className={styles.content_row} >
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
        <Box data-aos="fade-up" className={styles.content_row} >
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <TimelineIcon style={{ fontSize: "10rem" }} />
            </div>
          </Box>
          <Box className={styles.content_col} >
            <div className={styles.paper}>
              <h6 className={styles.subtitle} >Roadmap</h6>
              <p className={styles.content}>
                Nulla minim dolore consectetur sit sit reprehenderit ex anim Minim aute cillu
              </p>
              <Button color="inherit" href="/roadmap" style={{ border: "1px solid white" }} >See our roadmap</Button>
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
          <div className={styles.sponsor_logo} >
            <img src="dash_thailand.jpg" alt="Dash Thailand" height="100"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
