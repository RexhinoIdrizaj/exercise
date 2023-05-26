import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const UIAppBar: FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="center" flex={1}>
            <Typography variant="h6">NewGlobe Exercise</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default UIAppBar;
