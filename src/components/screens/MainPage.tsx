import React from "react";
import ScreenAppBar from "../molecules/ScreenAppBar";
import "../../styles/MainPage.css";
import { Box } from "@mui/material";
import { Containers } from "../../constants/customStyles";
import PersistentDrawer from "../molecules/PersistentDrawer";
import { DRAWER_MENU } from "../../constants/dasboard";

const MainPage = () => {
  return (
    <>
      <ScreenAppBar />
      <Box sx={{ ...Containers.rowStartCenter }}>
        <PersistentDrawer menuItems={DRAWER_MENU} />
      </Box>
    </>
  );
};

export default MainPage;
