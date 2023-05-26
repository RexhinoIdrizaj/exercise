import { FC } from "react";
import List from "@mui/material/List";
import { ReportProblemTwoTone, SchoolTwoTone } from "@mui/icons-material";

import { UIListItem } from "./UI";
import { TSingleAcademyData } from "../models";

interface TAcademiesListProps {
  data: TSingleAcademyData[];
  onItemClick: (academyId: string) => void;
}

const AcademiesList: FC<TAcademiesListProps> = ({ data, onItemClick }) => {
  return (
    <List sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {data.map((value) => {
        return (
          <UIListItem
            key={value.id}
            mainText={value.id}
            rightText={value.batteryIssues}
            leftIcon={<SchoolTwoTone />}
            rightIcon={<ReportProblemTwoTone color="error" />}
            onClick={() => onItemClick(value.id)}
          />
        );
      })}
    </List>
  );
};

export default AcademiesList;
