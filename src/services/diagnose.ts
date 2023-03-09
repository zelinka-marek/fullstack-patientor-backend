import { diagnoses } from "../../data/diagnoses";
import { type Diagnose } from "../types";

export function getDiagnoses(): Diagnose[] {
  return diagnoses;
}
