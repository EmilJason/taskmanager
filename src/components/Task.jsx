import React from 'react'
import { Card, CardContent, Button, Typography } from "@material-ui/core";

export default function Task() {
    return (
        <Card variant="outlined" style={{marginBottom: "1rem"}}>
            <CardContent style={{display: 'flex'}}>
                <Typography style={{flexGrow: 1, alignSelf: 'center'}} variant="body1">Sample Task</Typography>
                <Button variant="contained" color="primary">Done</Button>
                <Button variant="text" color="secondary">Edit</Button>
            </CardContent>
        </Card>
    )
}
