import { Box, Typography } from "@mui/material";
import LineGraph from "./LineGraph";
import { getRandamoizedGraphsData } from "../../../utils";

const Graphs = () => {
  const { lineGraphData } = getRandamoizedGraphsData();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <LineGraph data={lineGraphData} />
      <Typography variant="h4">Hello</Typography>
      <Typography variant="h4">Hello</Typography>
      <Typography variant="h4">Hello</Typography>
    </Box>
  );
};

export default Graphs;
