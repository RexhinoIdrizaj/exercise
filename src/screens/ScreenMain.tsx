import { Box, Container, Grid, Typography } from "@mui/material";
import { UIList } from "../components";

const ScreenMain = () => {
  return (
    <Container>
      <Box paddingY={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography textAlign="center" variant="h3">
                Academies
              </Typography>
              <UIList />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box>
              <Typography textAlign="center" variant="h3">
                Devices
              </Typography>
              <UIList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ScreenMain;
