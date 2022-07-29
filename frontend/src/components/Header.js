import React, { useState } from "react";
import { AppBar, 
  Tab, 
  Tabs, 
  Toolbar, 
  Typography } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ text:"center",color: "white" }}>
            <Typography variant="h4">
                One on One Session
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* <Tab LinkComponent={NavLink} to="/login" label="Login" /> */}
            {/* <Tab LinkComponent={NavLink} to="/register" label="Register" /> */}
            <Tab LinkComponent={NavLink} to="/user" label="Select User" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Session" />
            <Tab LinkComponent={NavLink} to="/" label="Dashboard" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
