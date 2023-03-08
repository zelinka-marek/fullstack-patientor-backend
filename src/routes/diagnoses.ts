import express from "express";
import { getDiagnoses } from "../services/diagnose";

export const diagnoseRouter = express.Router();

diagnoseRouter.get("/", (_request, response) => {
  response.send(getDiagnoses());
});
