import React, { memo } from "react";
import { useDashboardScene } from "./index.hooks";
import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router";

type DashboardSceneProps = {};

export const DashboardScene = memo(({}: DashboardSceneProps) => {
  const {} = useDashboardScene();

  return (
    <Box
      sx={{
        p: 10,
        bgcolor: "#f00",
      }}
    >
      Dashboard:
      <Paper>
        sottoroute:
        <Outlet></Outlet>
      </Paper>
    </Box>
  );
});

DashboardScene.displayName = "DashboardScene";
