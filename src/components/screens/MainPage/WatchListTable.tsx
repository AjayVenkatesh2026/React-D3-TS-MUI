import { PropsWithChildren } from "react";
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ITableItem } from "../../../types/MainPage";
import { tableHeaderStyles, tableCellStyles } from "../../../constants/styles";

const InvoicesGraph = (props: PropsWithChildren<{ data: ITableItem[] }>) => {
  const { data = [] } = props;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        width: "49%",
        height: "20rem",
        minWidth: "400px",
        minHeight: "300px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
          Account watchlist
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ margin: "0 1rem", flex: 1 }}>
        <Table sx={{ flex: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderStyles}>Account</TableCell>
              <TableCell sx={tableHeaderStyles}>This Month</TableCell>
              <TableCell sx={tableHeaderStyles}>YTD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.account}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ ...tableCellStyles }}
                >
                  {row.account}
                </TableCell>
                <TableCell sx={{ ...tableCellStyles, width: 120 }}>
                  {row.month}
                </TableCell>
                <TableCell sx={{ ...tableCellStyles, width: 120 }}>
                  {row.ytd}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default InvoicesGraph;
