import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  // import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { loginForm } from '../api/userApi';

  const Login = () => {
    const history = useNavigate();
    const [user, setUser] = useState({name: ""});
    const { name } = user;

    // const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
      setUser((prevState) => ({...prevState,[e.target.name]: e.target.value,}));
      console.log(e.target.name, "Value", e.target.value);
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      await loginForm(user);
      // console.log(user);
        history("/dashboard");
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
          <FormLabel>Name</FormLabel>
          <TextField
            value={name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          /> 
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    );
  };
  
  export default Login;
  