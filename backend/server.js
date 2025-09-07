import { quotes } from "./quotes.js";
import express, { text } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.json(quote);
});

app.post("/", (req, res) => {
  const newQuote = {
    quote: req.body.quote,
    author: req.body.author,
  };

  if (!newQuote.quote || !newQuote.author) {
    return res
      .status(400)
      .json({ error: "Both Quote and author are required" });
  }
  quotes.push(newQuote);

  res.status(201).json({
    message: "New quote added successfully!",
    added: newQuote,
  });
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});
