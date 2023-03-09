import cors from "cors";
import express from "express";
import { diagnoseRouter } from "./routes/diagnoses";
import { patientRouter } from "./routes/patients";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (_request, response) => {
  response.send("pong");
});

app.use("/api/diagnosis", diagnoseRouter);
app.use("/api/patients", patientRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
