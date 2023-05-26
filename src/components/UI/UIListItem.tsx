import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Box from "@mui/material/Box";

interface TUIListItemProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const UIListItem: FC<TUIListItemProps> = ({ leftIcon, rightIcon }) => {
  return (
    <ListItem>
      <ListItemButton>
        {leftIcon && <ListItemIcon>{leftIcon}</ListItemIcon>}
        <ListItemText primary={`30002`} />
        <Box display="flex" alignItems="center">
          {rightIcon && (
            <ListItemIcon sx={{ minWidth: 25 }}>{rightIcon}</ListItemIcon>
          )}
          <ListItemText id={"issues"} primary={`5`} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UIListItem;
