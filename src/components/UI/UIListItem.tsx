import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

import { TNullable } from "../../models";

interface TUIListItemProps {
  mainText: string | number;
  dataTestId?: string;
  selected?: boolean;
  rightText?: string | number;
  leftIcon?: JSX.Element;
  rightIcon?: TNullable<JSX.Element>;
  onClick?: () => void;
}

const UIListItem: FC<TUIListItemProps> = ({
  selected,
  leftIcon,
  mainText,
  rightText,
  rightIcon,
  dataTestId,
  onClick,
}) => {
  return (
    <ListItem data-testid={`${dataTestId}-list-item`}>
      <ListItemButton selected={selected} onClick={onClick}>
        {leftIcon && (
          <ListItemIcon
            data-testid={`${dataTestId}-left-icon`}
            sx={{ minWidth: 35 }}
          >
            {leftIcon}
          </ListItemIcon>
        )}
        <ListItemText
          data-testid={`${dataTestId}-left-text`}
          primary={mainText}
        />
        <Box display="flex" alignItems="center">
          {rightText && (
            <ListItemText
              data-testid={`${dataTestId}-right-text`}
              primary={rightText}
            />
          )}
          {rightIcon && (
            <ListItemIcon
              data-testid={`${dataTestId}-right-icon`}
              sx={{ marginLeft: 1, marginBottom: 0.5 }}
            >
              {rightIcon}
            </ListItemIcon>
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default UIListItem;
