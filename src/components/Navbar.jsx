import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    brandHeader:{
      marginLeft: theme.spacing(1)
    }
  }))

export default function Navbar() {
    const classes = useStyles()
    return (
        <AppBar position="relative" variant="outlined">
            <Toolbar>
                <Typography variant="h6" className={classes.brandHeaders}>
                    Task Manager
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
