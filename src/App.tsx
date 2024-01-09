import React from "react";
import DashboardSideNavBar from "./components/DashboardSideNavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PaymentSection from "./components/PaymentSection";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex bg-white h-screen overflow-scroll">
        <DashboardSideNavBar />
        <PaymentSection />
      </div>
    </ThemeProvider>
  );
}
