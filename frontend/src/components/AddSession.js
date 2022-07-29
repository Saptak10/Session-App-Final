import React, { useState } from "react";
import {
    Button,
    TextField,
    FormLabel,
    Typography,
    OutlinedInput,
    InputLabel,
    MenuItem,
    Select,
    Chip
  } from "@mui/material";

import { LocalizationProvider,
  TimePicker, 
  DesktopDatePicker,
   } from '@mui/x-date-pickers';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { Box } from "@mui/system";

import { useTheme } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";

import { postSession } from '../api/sessionApi';

import courseList from "./Courses.js";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, courseName, theme) {
  return {
    fontWeight:
      courseName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const initialValue = {
  name: "",
  date: new Date('2014-08-18T21:11:54'),
  start: new Date('2014-08-18T21:11:54'),
  end: new Date('2014-08-18T21:11:54'),
  courses:[]
  }

  const AddSession = () => {

    const [session, setSession] = useState({initialValue});
    const [courseName, setCourseName] = React.useState([]);
    const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
    const [start, setStart] = useState(new Date('2014-08-18T21:11:54'));
    const [end, setEnd] = useState(new Date('2014-08-18T21:11:54'));
    
    const theme = useTheme();
    const history = useNavigate();
    
    const handleCourseChange = (event) => {
      const {
        target: { value },
      } = event;
      setCourseName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    const handleChangeDate = (e) => {
      setDate(e);
    };

    const handleChangeStart = (e) => {
      setStart(e);
    };

    const handleChangeEnd = (e) => {
      setEnd(e);
      console.log(e);
    };

    // const { name, date, start, end, courses } = session;
    const { name } = session;
    
    const handleChange = (e) => {
      setSession((prevState) => ({...prevState,[e.target.name]: e.target.value,}));
      console.log(e.target.name, "Value", e.target.value);
    };

    const handleSubmit = async(e) => {
      const session = {name, date,start,end};
      console.log(e);
      e.preventDefault();
      await postSession(session);
        history("/");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <Typography variant="h3" gutterBottom component="div">
            Add the session
          </Typography>
          <FormLabel>Name</FormLabel>
            <TextField
              value={name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <FormLabel sx = {{marginTop: 2, marginBottom: 2}}>Mention your availability</FormLabel>
            <LocalizationProvider dateAdapter={AdapterMoment}>

                <DesktopDatePicker
                  label="Date"
                  inputFormat="MM/dd/yyyy"
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <FormLabel sx = {{marginTop: 2, marginBottom: 2}}>Start Time</FormLabel>
              <TimePicker
                label="From"
                value={start}
                onChange={handleChangeStart}
                renderInput={(params) => <TextField {...params} />}
              />
              <FormLabel sx = {{marginTop: 2, marginBottom: 2}}>End Time</FormLabel>
              <TimePicker
                label="To"
                value={end}
                onChange={handleChangeEnd}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
      
            <FormLabel sx = {{marginTop: 2, marginBottom: 2}}>Choose your courses</FormLabel>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="courseId"
              id="id"
              multiple
              value={courseName}
              onChange={handleCourseChange}
              input={<OutlinedInput id="id" label="Courses" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {courseList.map((course) => (
                <MenuItem
                  key={course}
                  value={course}
                  style={getStyles(course, courseName, theme)}
                >
                  {course}
                </MenuItem>
              ))}
            </Select>
  
          <Button sx = {{marginTop: 2, marginBottom: 2}} variant="contained" type="submit">
            Add Session
          </Button>
        </Box>
      </form>
    );
  };

  export default AddSession;
  