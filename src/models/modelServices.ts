import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface TApiBaseReturn {
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  post<T = any, D = any>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  put<T = any, D = any>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  patch<T = any, D = any>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>;
}

//Academies

export interface TDeviceLog {
  academyId: number;
  batteryLevel: number;
  employeeId: string;
  serialNumber: string;
  timestamp: string;
}

export type TGetAcademiesLogsResponse = TDeviceLog[];
