import { Box, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

function ColorBadge(
  props: PropsWithChildren<{ color: string; label: string }>
) {
  const { color, label } = props;

  return (
    <Box
      sx={{
        padding: "0 12px",
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1rem",
          height: "1rem",
          borderRadius: "4px",
          backgroundColor: color,
          marginRight: "0.4rem",
        }}
      />
      <Typography variant="body1">{label}</Typography>
    </Box>
  );
}

export default ColorBadge;
