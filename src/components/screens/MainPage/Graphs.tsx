import { Box } from "@mui/material";
import LineGraph from "./LineGraph";
import InvoicesGraph from "./InvoicesGraph";
import CashFlowGraph from "./CashFlowGraph";
import WatchListTable from "./WatchListTable";
import { getRandamoizedGraphsData } from "../../../utils";

const Graphs = () => {
  const {
    lineGraphData,
    invoiceGraphData,
    cashFlowGraphData,
    accountWatchlistTableData,
  } = getRandamoizedGraphsData();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        gap: "2%",
        rowGap: "1rem",
      }}
    >
      <LineGraph data={lineGraphData} />
      <InvoicesGraph data={invoiceGraphData} />
      <CashFlowGraph data={cashFlowGraphData} />
      <WatchListTable data={accountWatchlistTableData} />
    </Box>
  );
};

export default Graphs;
