import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

import UIAppBar from "./UIAppBar";
import UIFooter from "./UIFooter";

interface UILayoutProps {
  children: ReactNode;
}

const UILayout: FC<UILayoutProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <UIAppBar />
      <Box flexGrow={1}>{children}</Box>
      <UIFooter />
    </Box>
  );
};

export default UILayout;
