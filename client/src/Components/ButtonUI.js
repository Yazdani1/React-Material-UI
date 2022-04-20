import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./buttonui.css";

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
          >
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </React.Fragment>
  );
};

export default ButtonUI;
