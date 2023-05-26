import { TGetAcademiesLogsResponse } from "../models";
import axiosMethods from "./serviceConfig";

export const getAcademiesLogs = async () => {
  try {
    const response = await axiosMethods.get<TGetAcademiesLogsResponse>(
      "battery-data.json"
    );
    if (!response) throw new Error("No response");
    return response?.data;
  } catch (error) {
    console.log("getAcademiesLogs error", error);
  }
};
