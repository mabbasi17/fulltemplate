import { useRoutes } from 'react-router-dom'
import { routes } from './Utils/routes';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from './Utils/theme';

function App() {
  const content = useRoutes(routes)
  const [theme, colorMode ] = useMode();
    return (
  <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
          <div className="App">{content}</div>
          
           </ThemeProvider>
    </ColorModeContext.Provider>
)
}

export default App;
