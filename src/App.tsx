import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import { ScreenMain } from "./screens";
import { UILayout } from "./components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UILayout>
        <ScreenMain />
      </UILayout>
    </ThemeProvider>
  );
};

export default App;
