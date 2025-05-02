import { ITimestamps } from "./Timestamps.interface";

export interface IPatient extends ITimestamps {
  _id: string;
  identification: string;
  firstname: string;
  middlename: string;
  lastname: string;
  secondlastname: string;
  birth: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  locationHistory?: {
    location: string;
    latitude: number;
    longitude: number;
    updatedAt: Date;
  }[];
}
