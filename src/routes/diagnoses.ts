import express from "express";
import { getDiagnosis } from "../services/diagnose";

export const diagnoseRouter = express.Router();

diagnoseRouter.get("/", (_request, response) => {
  response.send(getDiagnosis());
});
