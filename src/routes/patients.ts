import express from "express";
import { getNonSensitivePatients } from "../services/patient";

export const patientRouter = express.Router();

patientRouter.get("/", (_request, response) => {
  response.send(getNonSensitivePatients());
});
