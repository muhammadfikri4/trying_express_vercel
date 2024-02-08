const express = require("express");

const app = express();
const DBconnect = require("./utils/db");
DBconnect();
const Dummy = require("./model/dummy");

app.get("/", (req, res) => {
  res.send("Hai");
});

app.get("/tes", async (req, res) => {
  const data = await Dummy.create({
    name: "MuhFikri",
    gender: "L",
  });
  res.json({ message: "succes" });
});

app.get("/testing", async (req, res) => {
  const data = await Dummy.find();
  res.json({ data });
});

app.listen(5000, () => {
  console.log("Jalan di 5000");
});
