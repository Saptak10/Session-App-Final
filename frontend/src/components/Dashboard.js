import { useState, useEffect } from 'react';
import { Table, 
    TableHead, 
    TableCell, 
    TableRow, 
    TableBody, 
    Button, 
    makeStyles} from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import {Typography,
    TextField,
    Autocomplete,
    InputLabel,
    MenuItem,
    Select} from "@mui/material";
        
import { Link } from 'react-router-dom';

import { getSession } from '../api/sessionApi';

import sessionList from "./sessions.js";

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 50px 60px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#3CB371',
            color: '#FFFFFF',
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const Dashboard = () => {

    const [sessions, setSessions] = useState([]);
    const [slot, setSlot] = useState('');

    const handleChange = (event) => {
        console.log(slot);
      setSlot(event.target.value);
    };

    const classes = useStyles();

    useEffect(() => {
        getAllSession();
    }, []);

    const getAllSession = async () => {
        let response = await getSession();
        setSessions(response.data);
    }

    return (<div>
        <Typography className={classes.table} variant="h3" gutterBottom component="div">
                Book your session
            </Typography>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead} >
                    <TableCell>Mentor Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Available From</TableCell>
                    <TableCell>Till</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>
                        <InputLabel>Slot</InputLabel>
                        <Select
                            value={slot}
                            label="Slot"
                            onChange={handleChange}
                            >
                            <MenuItem value={2000}>30</MenuItem>
                            <MenuItem value={3000}>45</MenuItem>
                            <MenuItem value={4000}>60</MenuItem>
                        </Select>
                        </TableCell>
                    <TableCell>Book</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sessionList.map((session) => (
                    <TableRow className={classes.row} key={session.id}>
                        <TableCell>{session.name}</TableCell>
                        <TableCell>{session.date}</TableCell>
                        <TableCell>{session.start}</TableCell>
                        <TableCell>{session.end}</TableCell>
                        <TableCell>{session.course}</TableCell>
                        <TableCell>
                        {/* <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={duration}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="duration" />}
                            /> */}
                            30
                        </TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" component={Link} to={`/payment`}><AddCircleIcon /></Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    )
}

export default Dashboard;