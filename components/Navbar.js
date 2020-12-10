import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import { Button, Grid } from '@material-ui/core'

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
        <Slide direction="down" in={!(presentPos > prevPos )}>
            <AppBar style={{ backgroundColor: `rgba(0,0,0,1)` }}>
                <Toolbar>
                <Grid
                    justify="space-between"
                    container 
                    spacing={24}
                    alignItems="center"
                >
                    <a href="/" >
                        <Typography variant="h6">CUBS</Typography>
                    </a>
                    <div>
                        <Button color="inherit" href="/" >Home</Button>
                        <Button color="inherit" href="/" >About us</Button>
                    </div>
                </Grid>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}