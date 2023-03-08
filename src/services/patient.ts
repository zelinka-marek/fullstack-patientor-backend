import { v1 as uuid } from "uuid";
import { patients } from "../../data/patients";
import type { NewPatient, NonSensitivePatient, Patient } from "../types";

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

export function addPatient(newPatient: NewPatient): Patient {
  const patient: Patient = { id: uuid(), ...newPatient };
  patients.push(patient);

  return patient;
}
