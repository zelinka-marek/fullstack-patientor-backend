import express from "express";

const app = express();
const port = 3001;

app.get("/ping", (_request, response) => {
  response.send("pong");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
