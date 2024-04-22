import React, { memo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppSnackbar } from "@/components/AppSnackbar";
import useAppHooks from "./index.hooks";
import { DashboardScene, LoginScene } from "@/spas/admin-panel/scenes";
import { Outlet } from "react-router";

const App: React.FC = () => {
  const { theme, open, type, message, handleClose } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/admin-panel">
        <Routes>
          <Route path="/login" element={<LoginScene />} />
          <Route path="/dashboard" element={<DashboardScene />}>
            <Route
              path="users"
              element={
                <span>
                  Users <Outlet />
                </span>
              }
            >
              <Route path="about" element={<span>About</span>} />
              <Route path="contacts" element={<span>Contacts</span>} />
            </Route>
            <Route path="posts" element={<span>Posts</span>} />
          </Route>
          <Route path="/" element={<span>TEST</span>} />
        </Routes>
      </BrowserRouter>
      <AppSnackbar
        open={open}
        message={message}
        severity={type}
        onClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default memo(App);
