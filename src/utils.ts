import type { NewPatient } from "./types";
import { Gender } from "./types";

function isString(param: unknown): param is string {
  return typeof param === "string" || param instanceof String;
}

function isDate(date: string): boolean {
  return Boolean(Date.parse(date));
}

function isGender(gender: string): gender is Gender {
  return Object.values(Gender)
    .map((value) => value.toString())
    .includes(gender);
}

function parseName(name: unknown): string {
  if (!isString(name)) {
    throw new Error(`Incorrect or missing name: ${JSON.stringify(name)}`);
  }

  return name;
}

function parseDateOfBirth(date: unknown): string {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${JSON.stringify(date)}`);
  }

  return date;
}

function parseSsn(ssn: unknown): string {
  if (!isString(ssn)) {
    throw new Error(`Incorrect or missing ssn: ${JSON.stringify(ssn)}`);
  }

  return ssn;
}

function parseGender(gender: unknown): Gender {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${JSON.stringify(gender)}`);
  }

  return gender;
}

function parseOccupation(occupation: unknown): string {
  if (!isString(occupation)) {
    throw new Error(
      `Incorrect or missing occupation: ${JSON.stringify(occupation)}`
    );
  }

  return occupation;
}

export function toNewPatient(data: unknown): NewPatient {
  if (!data || typeof data !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in data &&
    "dateOfBirth" in data &&
    "ssn" in data &&
    "gender" in data &&
    "occupation" in data
  ) {
    const newPatient: NewPatient = {
      name: parseName(data.name),
      dateOfBirth: parseDateOfBirth(data.dateOfBirth),
      ssn: parseSsn(data.ssn),
      gender: parseGender(data.gender),
      occupation: parseOccupation(data.occupation),
    };

    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
}
