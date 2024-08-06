import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Customers from "scenes/customers";
import Admin from "scenes/admin";
import Login from "scenes/login/index";
import PrivateRoute from "components/PrivateRoute";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route
                    path="/dashboard"
                    element={<PrivateRoute element={<Dashboard />} />}
                />
                <Route
                    path="/customers"
                    element={<PrivateRoute element={<Customers />} />}
                />
                <Route
                    path="/admin"
                    element={<PrivateRoute element={<Admin />} />}
                />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
