import React, { useState } from "react";
import ScreenAppBar from "../../molecules/ScreenAppBar";
import "../../../styles/MainPage.css";
import { Box } from "@mui/material";
import { Containers } from "../../../constants/customStyles";
import PersistentDrawer from "../../molecules/PersistentDrawer";
import { DRAWER_MENU } from "../../../constants/dasboard";
import Graphs from "./Graphs";
import { IGraphsData } from "../../../types/MainPage";
import { getRandamoizedGraphsData } from "../../../utils";

const MainPage = () => {
  const [graphData, setGraphData] = useState<IGraphsData>(
    getRandamoizedGraphsData()
  );

  const randomizeData = () => {
    setGraphData(getRandamoizedGraphsData());
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ScreenAppBar randomize={randomizeData} />
      <Box
        sx={{
          ...Containers.rowStartStart,
          flex: 1,
        }}
      >
        <PersistentDrawer menuItems={DRAWER_MENU} />
        <Graphs data={graphData} />
      </Box>
    </Box>
  );
};

export default MainPage;
