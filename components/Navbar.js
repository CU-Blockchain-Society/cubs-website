import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import { Button, Grid } from '@material-ui/core'
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    const [prevPos, setPrevPos] = useState(0)
    const [presentPos, setPresentPos] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setPrevPos(presentPos)
            setPresentPos(window.pageYOffset)
        }, 200)
    }, [])
    return (
        <Slide direction="down" in={ presentPos >= 250 }>
            <AppBar style={{ backgroundColor: `rgba(0,0,0,1)` }}>
                <Toolbar>
                <Grid
                    justify="space-between"
                    container 
                    spacing={24}
                    alignItems="center"
                >
                    <a className={styles.wrap} href="/" >
                        <img src="cubs_nav.jpg" alt="CUBS" height="35"></img>
                        <p className={styles.home_text} >CUBlockchainSociety</p>
                    </a>
                    <div>
                        <Button color="inherit" href="/" >Home</Button>
                        <Button color="inherit" href="/about" >About us</Button>
                        <Button color="inherit" href="/roadmap" >Events</Button>
                    </div>
                </Grid>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}