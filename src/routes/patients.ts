import express from "express";
import {
  addPatient,
  getNonSensitivePatients,
  getPatientById,
} from "../services/patient";
import { toNewPatient } from "../utils";

export const patientRouter = express.Router();

patientRouter.get("/", (_request, response) => {
  response.send(getNonSensitivePatients());
});

patientRouter.get("/:id", (request, response) => {
  const { id } = request.params;

  const patient = getPatientById(id);
  if (!patient) return response.sendStatus(404);

  return response.json(patient);
});

patientRouter.post("/", (request, response) => {
  try {
    const newPatient = toNewPatient(request.body);
    const addedPatient = addPatient(newPatient);

    response.status(201).json(addedPatient);
  } catch (error) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }

    response.status(400).send(errorMessage);
  }
});
