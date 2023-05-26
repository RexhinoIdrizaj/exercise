import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Box from "@mui/material/Box";

interface TUIListItemProps {
  mainText: string | number;
  onClick?: () => void;
  rightText?: string | number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const UIListItem: FC<TUIListItemProps> = ({
  leftIcon,
  mainText,
  rightText,
  rightIcon,
  onClick,
}) => {
  return (
    <ListItem>
      <ListItemButton onClick={onClick}>
        {leftIcon && (
          <ListItemIcon sx={{ minWidth: 35 }}>{leftIcon}</ListItemIcon>
        )}
        <ListItemText primary={mainText} />
        <Box display="flex" alignItems="center">
          {rightText && <ListItemText id={"issues"} primary={rightText} />}
          {rightIcon && (
            <ListItemIcon sx={{ minWidth: 25 }}>{rightIcon}</ListItemIcon>
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UIListItem;
