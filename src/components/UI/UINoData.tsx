import { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface TUINoDataProps {
  isLoading: boolean;
  isEmpty: boolean;
}

const UINoData: FC<TUINoDataProps> = ({ isLoading, isEmpty }) => {
  return (
    <>
      {isLoading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />{" "}
        </Box>
      )}
      {!isLoading && isEmpty && (
        <Box display="flex" justifyContent="center">
          <Typography>There is no data at this moment</Typography>{" "}
        </Box>
      )}
    </>
  );
};

export default UINoData;
