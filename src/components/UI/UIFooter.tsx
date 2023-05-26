import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const UIFooter: FC = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main" }}
      paddingY={2}
      display="flex"
      justifyContent="center"
      component="footer"
    >
      <Typography variant="h6" color="text.secondary">
        Exercise
      </Typography>
    </Box>
  );
};

export default UIFooter;
