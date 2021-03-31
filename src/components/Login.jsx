import { Container, Card, CardHeader, CardContent, TextField, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    inputs:{
        marginBottom: theme.spacing(1)
    }
}))

export default function Login() {
    const classes = useStyles()
    return (
        <Container maxWidth="sm">
            <Card variant="outlined" style={{marginTop: '1rem'}}>
                <CardHeader title="Login"/>
                <CardContent>
                    <form className={classes.formInputs} autoComplete="off">
                        <TextField
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            fullWidth 
                            className={classes.inputs} />
                        <TextField
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth 
                            className={classes.inputs}/>

                        <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        className={classes.inputs}>
                            Login
                        </Button>

                        <Button 
                        variant="text" 
                        color="primary" 
                        fullWidth
                        className={classes.inputs}>
                            Register
                        </Button>
                        
                        <Typography variant="overline">or login using the following</Typography>

                        <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth
                        className={classes.inputs}>
                            Login via Google
                        </Button>

                        <Button 
                        variant="contained" 
                        color="secondary" 
                        fullWidth
                        className={classes.inputs}>
                            Login via Facebook
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}
