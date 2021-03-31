import {useState} from 'react'
import { Grid, Typography, Card, CardHeader, CardContent, TextField, Button, Container } from "@material-ui/core";
import Task from './Task'
export default function Dashboard() {
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState('')

    const onSave = () =>{
        return description != null || date != null || time != null ? console.log(description, date, time) : console.log('Please input a valid value')
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={3}>
                <Card variant="outlined" style={{marginTop: '1rem'}}>
                    <CardHeader title="Add new Task" />
                    <CardContent>
                        <TextField
                        name="taskField"
                        type="text"
                        variant="outlined"
                        label="Task Description"
                        fullWidth 
                        style={{marginBottom: '1rem'}}
                        onChange={(e)=>setDescription(e.target.value)}/>
                        
                        <TextField
                        name="taskDue"
                        type="Date"
                        variant="outlined"
                        fullWidth 
                        style={{marginBottom: '1rem'}}
                        onChange={(e)=>setDate(e.target.value)}/>

                        <TextField
                        name="taskDueTime"
                        type="time"
                        variant="outlined"
                        fullWidth 
                        style={{marginBottom: '1rem'}}
                        onChange={e=>setTime(e.target.value)}/>

                        <Button variant="contained" color="primary" fullWidth onClick={onSave}>Save</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
                <Container style={{marginTop: '1rem'}}>
                    <Typography variant="h4">Tasks</Typography>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </Container>
            </Grid>
        </Grid>
    )
}
