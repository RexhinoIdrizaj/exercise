import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import Box from "@mui/material/Box";
import { TNullable } from "../../models";

interface TUIListItemProps {
  mainText: string | number;
  onClick?: () => void;
  selected?: boolean;
  rightText?: string | number;
  leftIcon?: JSX.Element;
  rightIcon?: TNullable<JSX.Element>;
}

const UIListItem: FC<TUIListItemProps> = ({
  selected,
  leftIcon,
  mainText,
  rightText,
  rightIcon,
  onClick,
}) => {
  return (
    <ListItem>
      <ListItemButton selected={selected} onClick={onClick}>
        {leftIcon && (
          <ListItemIcon sx={{ minWidth: 35 }}>{leftIcon}</ListItemIcon>
        )}
        <ListItemText primary={mainText} />
        <Box display="flex" alignItems="center">
          {rightText && <ListItemText primary={rightText} />}
          {rightIcon && (
            <ListItemIcon sx={{ marginLeft: 1, marginBottom: 0.5 }}>
              {rightIcon}
            </ListItemIcon>
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UIListItem;
