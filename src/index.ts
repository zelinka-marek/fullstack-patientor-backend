import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/ping", (_request, response) => {
  response.send("pong");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
