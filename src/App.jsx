
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";
import Navigation from "./components/Navigation";
import TasksComponent from "./components/TasksComponent";
import ProfileComponent from "./components/ProfileComponent";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          
          <Routes>
            <Route path="/" element={<TasksComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
