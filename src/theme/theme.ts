import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#556cd6",
  secondary: "#19857b",
  textPrimary: "black",
  textSecondary: "white",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  shadows: [
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
});

export default theme;
