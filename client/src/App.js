import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar.js";
import Landing from "./screens/Landing/Landing";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import useDarkMode from "./styles/useDarkMode";

const Container = styled.div`
  background-color: red;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();
  console.log("el modo es", theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Container>
          <div className="App">
            <Route exact path="/home" component={Landing}></Route>
            <Route
              exact path="/"
              component={() => (
                <Navbar theme={theme} toggleTheme={toggleTheme} />
              )}
            />
            <Route exact path="/" component={Main} />
          </div>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
