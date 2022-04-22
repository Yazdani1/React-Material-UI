import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./buttonui.css";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { height, padding } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 20,
    backgroundColor: "red",
    padding: "20px",
    textAlign: "center",
    color: "white",
  },
  btn: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "60px",
  },
});

const ButtonUI = () => {
  const classes = useStyles();

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
            size="small"
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "18px",
            }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Contained
          </Button>

          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#21b6ae",
              padding: "18px 36px",
              fontSize: "18px",
            }}
            variant="outlined"
          >
            Outlined
          </Button>
        </Stack>
        <Paper spacing={2} sx={{ height: "350px", padding: "20px" }}>
          <Typography className={classes.title}>New Post</Typography>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default ButtonUI;
