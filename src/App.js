import MediaCard from "./Components/MediaCard";
import { useGetImagesQuery } from "./redux/nasaApi";
import {  CssBaseline, ThemeProvider } from "@mui/material";
import { StyledGrid, theme } from "./App.styled";
import AppBar from "./Components/AppBar/AppBar";

function App() {
  const { data } = useGetImagesQuery();

  return (
    <div>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar/>

        <StyledGrid>
        {data?.collection.items.map((item) => (
          <MediaCard image={item}/>
        ))}
        </StyledGrid>
      </ThemeProvider>
    </div>
  );
}

export default App;
