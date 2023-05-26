import { FC, useMemo } from "react";
import List from "@mui/material/List";
import {
  PermDeviceInformationTwoTone,
  Battery60TwoTone,
} from "@mui/icons-material";

import { UIListItem } from "./UI";
import { TWantedDeviceData } from "../models";

interface TDevicesListProps {
  data: TWantedDeviceData[];
}

const DevicesList: FC<TDevicesListProps> = ({ data }) => {
  const getRightText = useMemo(() => {
    return (percentPerDay: number) => (percentPerDay === 0 ? "unknown" : "");
  }, []);

  const getRightIcon = useMemo(() => {
    return (percentPerDay: number, hasIssue: boolean) =>
      percentPerDay > 0 ? (
        <Battery60TwoTone color={hasIssue ? "error" : "success"} />
      ) : null;
  }, []);

  return (
    <List sx={{ maxHeight: "70vh", overflowY: "scroll" }}>
      {data.map((value) => {
        return (
          <UIListItem
            key={value.serialNumber}
            mainText={value.serialNumber}
            rightText={getRightText(value.percentPerDay)}
            leftIcon={<PermDeviceInformationTwoTone />}
            rightIcon={getRightIcon(value.percentPerDay, value.hasIssue)}
          />
        );
      })}
    </List>
  );
};

export default DevicesList;
