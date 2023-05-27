import { FC, useMemo } from "react";
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
  const getRightIcon = useMemo(() => {
    return (batteryIssues: number) =>
      batteryIssues > 0 ? (
        <WarningTwoTone color="error" />
      ) : (
        <ThumbUpAltTwoTone color="success" />
      );
  }, []);
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
            rightIcon={getRightIcon(value.batteryIssues)}
            onClick={() => onItemClick(value.id)}
          />
        );
      })}
    </List>
  );
};

export default AcademiesList;
