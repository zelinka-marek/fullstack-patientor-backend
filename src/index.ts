import cors from "cors";
import express from "express";
import { diagnoseRouter } from "./routes/diagnoses";

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/ping", (_request, response) => {
  response.send("pong");
});

app.use("/api/diagnoses", diagnoseRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
