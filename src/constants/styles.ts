import { SxProps } from "@mui/material";

const graphAxisLableStyles: SxProps = {
  color: "#00000055",
  margin: "0",
  fontWeight: "600",
  fontSize: "0.7rem",
};

const tableHeaderStyles: SxProps = {
  ...graphAxisLableStyles,
  padding: "0.5rem 0",
  border: 0,
};

const tableCellStyles: SxProps = {
  color: "#00000099",
  margin: "0",
  fontWeight: "600",
  padding: "0.5rem 0",
  border: 0,
};

export { graphAxisLableStyles, tableHeaderStyles, tableCellStyles };
