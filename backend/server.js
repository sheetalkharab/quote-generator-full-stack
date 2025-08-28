import { quotes } from "./quotes.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.json(quote);
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});
