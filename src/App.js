import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterOutlet, theme } from "./App.styled";
import AppBar from "./Components/AppBar/AppBar";
import SearchPage from "./Components/SearchPage/SearchPage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/DetailPage";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <RouterOutlet>
          <Routes>
            <Route index path="/" element={<SearchPage />} />
            <Route path="detail">
              <Route path=":nasa_id" element={<DetailPage />} />
            </Route>
          </Routes>
        </RouterOutlet>
      </ThemeProvider>
    </div>
  );
}

export default App;
