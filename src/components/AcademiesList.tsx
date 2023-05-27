import { FC } from "react";
import List from "@mui/material/List";
import {
  WarningTwoTone,
  ThumbUpAltTwoTone,
  SchoolTwoTone,
} from "@mui/icons-material";

import { UIListItem } from "./UI";
import { TNullable, TSingleAcademyData } from "../models";

interface TAcademiesListProps {
  selectedId: TNullable<string>;
  data: TSingleAcademyData[];
  onItemClick: (academyId: string) => void;
}

const AcademiesList: FC<TAcademiesListProps> = ({
  data,
  selectedId,
  onItemClick,
}) => {
  return (
    <List sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {data.map((value) => {
        return (
          <UIListItem
            key={value.id}
            dataTestId="academy"
            selected={selectedId === value.id}
            mainText={value.id}
            rightText={value.batteryIssues}
            leftIcon={<SchoolTwoTone />}
            rightIcon={
              value.batteryIssues > 0 ? (
                <WarningTwoTone color="error" />
              ) : (
                <ThumbUpAltTwoTone color="success" />
              )
            }
            onClick={() => onItemClick(value.id)}
          />
        );
      })}
    </List>
  );
};

export default AcademiesList;
