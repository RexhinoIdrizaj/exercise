import { FC } from "react";
import List from "@mui/material/List";
import {
  PermDeviceInformationTwoTone,
  Battery60TwoTone,
} from "@mui/icons-material";

import { UIListItem } from "./UI";
import { TWantedDeviceData } from "../models";

interface TDevicesListProps {
  data: TWantedDeviceData[];
  onItemClick?: (academyId: number) => void;
}

const DevicesList: FC<TDevicesListProps> = ({ data, onItemClick }) => {
  console.log("🚀 ~ file: DevicesList.tsx:17 ~ data:", data);

  return (
    <List sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {data.map((value) => {
        return (
          <UIListItem
            key={value.serialNumber}
            mainText={value.serialNumber}
            rightText={value.percentPerDay}
            leftIcon={<PermDeviceInformationTwoTone />}
            rightIcon={
              <Battery60TwoTone color={value.hasIssue ? "error" : "success"} />
            }
            // onClick={() => onItemClick(value.id)}
          />
        );
      })}
    </List>
  );
};

export default DevicesList;
