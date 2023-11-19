import React, { PropsWithChildren } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  Toolbar,
} from "@mui/material";
import { Containers } from "../../constants/customStyles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ScreenAppBar = (props: PropsWithChildren<{ randomize: () => void }>) => {
  const { randomize } = props;

  return (
    <AppBar position="static" sx={{ boxShadow: "0px 0px 1px 0px gray" }}>
      <Toolbar
        sx={{
          ...Containers.rowStartCenter,
          padding: "1rem 2rem",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
            alt="logo"
            className="logo"
          />
        </Box>
        <Box sx={{ ...Containers.rowStartCenter, gap: "1rem" }}>
          <Button variant="outlined" onClick={randomize}>
            Randomize
          </Button>
          <Box
            sx={{
              ...Containers.rowStartCenter,
              padding: "0.4rem 0.4rem",
              borderRadius: "1rem",
              backgroundColor: "#eeeeee",
            }}
          >
            <SearchIcon sx={{ color: "#666" }} />
            <Input disableUnderline sx={{ width: "16rem" }} />
          </Box>
          <Badge
            color="success"
            variant="dot"
            slotProps={{
              badge: {
                style: {
                  right: "0.4rem",
                  top: "0.4rem",
                  border: "1px solid white",
                },
              },
            }}
          >
            <NotificationsIcon sx={{ color: "#333" }} />
          </Badge>
          <IconButton
            sx={{
              borderRadius: "0.4rem",
            }}
          >
            <Avatar
              alt="User Profile"
              src="face.jpeg"
              sx={{
                height: "2rem",
                width: "2rem",
                borderColor: "#eee",
                borderStyle: "solid",
                borderWidth: "1px",
                margin: "0 0.4rem 0 0",
              }}
            />
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ScreenAppBar;
