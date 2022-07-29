import {
    Button,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const initialValue = {
  type: "",
  }
  
  const User = () => {
    const history = useNavigate();
    const [user, setUser] = useState({initialValue});
    const { type } = user;
  
    const handleChange = (e) => {
      setUser((prevState) => ({...prevState,[e.target.name]: e.target.value,}));
      console.log(e.target.name, "Value", e.target.value);
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      if(type == "Mentor") history("/add");
      else if(type == "Student") history("/");
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
          <FormLabel>Choose if you are a student or mentor</FormLabel>
  
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="mentor"
            name="type"
            value={type} onChange={handleChange}
        >
            <FormControlLabel value="Mentor" control={<Radio />} label="Mentor" />
            <FormControlLabel value="Student" control={<Radio />} label="Student" />
        </RadioGroup>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    );
  }
  
  export default User;