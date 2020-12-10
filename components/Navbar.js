import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'

export default function Navbar(props) {
    const [prevPos, setPrevPos] = useState(0)
    const [presentPos, setPresentPos] = useState(0)
    useEffect(() => {
        setInterval(() => {
            console.log(window.pageYOffset)
            setPrevPos(presentPos)
            setPresentPos(window.pageYOffset)
        }, 200)
    }, [])
    return (
        <Slide direction="down" in={!(presentPos > prevPos )}>
            <AppBar style={{ backgroundColor: `rgba(0,0,0,1)` }}>
                <Toolbar>
                    <Typography variant="h6">CUBS</Typography>
                </Toolbar>
            </AppBar>
        </Slide>
    )
}