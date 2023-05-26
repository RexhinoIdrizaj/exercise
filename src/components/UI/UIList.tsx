import List from "@mui/material/List";
import UIListItem from "./UIListItem";

const UIList = () => {
  return (
    <List sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {[
        0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      ].map((value) => {
        return <UIListItem />;
      })}
    </List>
  );
};

export default UIList;
