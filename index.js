import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

const spirits = [
  "Soju", "Bacardi", "Vodka", "Gin", "Whisky", "Tequila", "Baileys", "Rum"
];

const mixers = [
  "Bintang", "Diet Coke", "Tonic Water", "Yakult", "Kratingdaeng",
  "Pocari Sweat", "Sprite", "Iced Tea", "Matcha Latte", "Kopi Susu", "Water",
  "RedBull"
];

app.get("/", (req, res) => {
  res.render("index.ejs")
});

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

app.post("/submit", (req, res) => {
  const drink = `${pick(spirits)} + ${pick(mixers)}`
  res.render("index.ejs", { drink });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
