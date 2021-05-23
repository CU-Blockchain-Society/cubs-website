import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Aos from "aos"
import "aos/dist/aos.css"
import { Box, Button } from '@material-ui/core'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FlagIcon from '@material-ui/icons/Flag'
import TimelineIcon from '@material-ui/icons/Timeline'
import Banner from '../components/Banner';

export default function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className={styles.container}>
      <Banner />
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
                CUBS is the blockchain society driven by Chulalongkorn University students that interested in blockchain technology 
              </p>
              <Button color="inherit" href="/about" style={{ border: "1px solid white" }} >About us</Button>
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
                To inform the people about the blockchain technology and also to make a great coorperation with any organizations who would like to create the blockchain activity
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
              <h6 className={styles.subtitle} >Previous events</h6>
              <p className={styles.content}>
              Our community has grown tremendously in such a short time. You can follow the recent activities here.
              </p>
              <Button color="inherit" href="/roadmap" style={{ border: "1px solid white" }} >See the roadmap</Button>
            </div>
          </Box>
        </Box>
      </div>
      <div className={styles.sponsors_zone} >
        <h6 className={styles.subtitle} >Our Partners</h6>
        <div className={styles.sponsors_wrap} >
          <div className={styles.sponsor_logo} >
            <img src="cuihub.png" alt="CU innovation hub" width="150" height="150"></img>
          </div>
          <div className={styles.sponsor_logo} >
            <img src="dash_thailand.jpg" alt="Dash Thailand" height="100"></img>
          </div>
        </div>
        {/* add sponsors here */}
        {/* <h6 className={styles.subtitle} >Supported by</h6> */}
      </div>
    </div>
  )
}
