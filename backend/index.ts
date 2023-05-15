import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.status(200).send("Testar testar!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
