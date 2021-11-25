import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import boxesStyle from "../styles/boxesStyle";

const DimensionMeasureBoxes = () => {
  const classes = boxesStyle();

  return (
    <>
      <Box className={classes.DimensionMeasureBox}>
        <Button variant="contained">Clear</Button>
      </Box>
      <Box className={classes.DimensionMeasureBox}>
        <Button variant="contained">Clear</Button>
      </Box>
    </>
  );
};

export default DimensionMeasureBoxes;
