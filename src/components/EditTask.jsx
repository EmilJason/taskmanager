import React from 'react'
import { Modal, Card, CardHeader, CardContent, TextField, Button } from "@material-ui/core";

export default function EditTask() {
    return (
        <Modal>
            <Card>
                <CardHeader title="Edit Task" />
                <CardContent>
                    <form>
                        
                        <TextField
                        type="text"
                        name="description"
                        variant="outlined"
                        label="Description" />
                        <TextField
                        type="date"
                        name="description"
                        variant="outlined" />
                        <TextField
                        type="time"
                        name="description"
                        variant="outlined" />

                        <Button variant="contained" color="primary">Save</Button>

                    </form>
                </CardContent>
            </Card>
        </Modal>
    )
}
