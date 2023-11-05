import React, { useState } from "react";
import {
  IPersistentDrawer,
  IPersistentDrawerMenuItem,
} from "../../types/MainPage";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const highlightAccentColor = "#fff";
const nonHighlightAccentColor = "#333";
const highlightBackgroundColor = "#55BC54";
const nonHighlightBackgroundColor = "#fff";
const defaultMenuItem = "Dashboard";

function PersistentDrawer(props: IPersistentDrawer) {
  const { menuItems } = props;
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<string>(defaultMenuItem);

  const onClickListItem = (value: string) => {
    setSelectedMenuItem(value);
  };

  const renderListItem = (item: IPersistentDrawerMenuItem, index: number) => {
    const { IconEle, content, value } = item;
    const accentColor =
      value === selectedMenuItem
        ? highlightAccentColor
        : nonHighlightAccentColor;
    const background =
      value === selectedMenuItem
        ? highlightBackgroundColor
        : nonHighlightBackgroundColor;

    return (
      <ListItem
        key={content}
        disablePadding
        sx={{ backgroundColor: background }}
      >
        <ListItemButton
          sx={{
            padding: "0.6rem 3rem 0.6rem 0rem",
          }}
          onClick={() => onClickListItem(value)}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: "1rem",
            }}
          >
            <IconEle
              sx={{
                width: "1.2rem",
                color: accentColor,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={content}
            sx={{ color: accentColor }}
            color={accentColor}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box>
      <List>{menuItems.map(renderListItem)}</List>
    </Box>
  );
}

export default PersistentDrawer;
