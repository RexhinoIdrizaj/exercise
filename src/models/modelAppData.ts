import { TDeviceLog } from "./modelServices";

export type TNullable<T> = T | null;

export interface TSignature<T> {
  [key: string]: T;
}

export type TGroupedData = TSignature<TSignature<TDeviceLog[]>>;

export interface TWantedDeviceData {
  serialNumber: string;
  usagePerDay: number;
  hasIssue: boolean;
  percentPerDay: number;
}

export type TSingleAcademyData = {
  id: string;
  batteryIssues: number;
  devices: TWantedDeviceData[];
};

export type TModifiedAcademiesData = TSignature<TSingleAcademyData>;
