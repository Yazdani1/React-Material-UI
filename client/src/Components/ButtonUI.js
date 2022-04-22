import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./buttonui.css";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { height, margin, padding } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 20,
    backgroundColor: "red",
    padding: "20px",
    textAlign: "center",
    color: "white",
  },
  items: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    width: "400px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  items2: {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "10px",
    width: "400px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    cursor: "pointer"
  },
  paperdesign: {
    height: "350px",
    padding: "20px",
    display: "flex",
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
        <Paper direction="row" spacing={2} className={classes.paperdesign}>
          <Typography className={classes.title}>New Post</Typography>
          <Box className={classes.items}>
            <p>New Box is here</p>
          </Box>
          <Box className={classes.items2}>
            <p>New Box is here</p>
          </Box>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default ButtonUI;
