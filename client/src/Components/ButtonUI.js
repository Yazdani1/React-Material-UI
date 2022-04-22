import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import "./buttonui.css";
import { Paper } from "@mui/material";

import { Typography } from "@mui/material";


const ButtonUI = () => {
  const handleClick = () => {
    alert("Click is working");
  };

  return (
    <React.Fragment>
      <div className="button-design">
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button
            onClick={handleClick}
            variant="contained"
            color="success"
            size="small"
            endIcon={<KeyboardArrowRightIcon/>}
          >
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Paper spacing={2} >
          <Typography>
            New Post
          </Typography>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default ButtonUI;
