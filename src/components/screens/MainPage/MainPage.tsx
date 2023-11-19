import React from "react";
import ScreenAppBar from "../../molecules/ScreenAppBar";
import "../../../styles/MainPage.css";
import { Box } from "@mui/material";
import { Containers } from "../../../constants/customStyles";
import PersistentDrawer from "../../molecules/PersistentDrawer";
import { DRAWER_MENU } from "../../../constants/dasboard";
import Graphs from "./Graphs";

const MainPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ScreenAppBar />
      <Box
        sx={{
          ...Containers.rowStartStart,
          flex: 1,
        }}
      >
        <PersistentDrawer menuItems={DRAWER_MENU} />
        <Graphs />
      </Box>
    </Box>
  );
};

export default MainPage;
