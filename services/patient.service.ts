import { backendApi } from "./api/config";
import { IPatient } from "@/interfaces/Patient.interface";

// getAllPatientsService
export const getAllPatientsService = async (): Promise<IPatient> => {
  try {
    const { data } = await backendApi.get<IPatient>("/patient");
    return data;
  } catch (error: any) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};
