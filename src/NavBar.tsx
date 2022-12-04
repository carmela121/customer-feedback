import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const NavbarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Customer Reviews
          </Typography>
          <Link to="/"><Typography component="div" color={"white"} variant="body1">Add Review</Typography></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
