import { patients } from "../../data/patients";
import type { NonSensitivePatient, Patient } from "../types";

export function getPatients(): Patient[] {
  return patients;
}

export function getNonSensitivePatients(): NonSensitivePatient[] {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation }): NonSensitivePatient => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    })
  );
}
