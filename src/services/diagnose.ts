import { diagnosis } from "../../data/diagnosis";
import { type Diagnose } from "../types";

export function getDiagnosis(): Diagnose[] {
  return diagnosis;
}
