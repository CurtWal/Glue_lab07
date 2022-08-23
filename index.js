"use strict";

require("dotenv").config();

const express = require("express");
const products = require("./Product");
const port = process.env.PORT || 3002;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/shoppinglist", (req, res) => {
  res.json(products);
});

app.get("/shoppinglist/:listName", (req, res) => {
  if (req.params.listName === "supplies") {
    res.send({
      lists: [
        {
          listName: "supplies",
          items: [
            {
              id: 1,
              name: "Tape",
              description: "sticks to things.",
              type: "supplies",
            },
            {
              id: 2,
              name: "Toilet Paper",
              description: "Personal hygiene products.",
              type: "supplies",
            },
            {
              id: 3,
              name: "Dish Soap",
              description: "Cleans your dishes.",
              type: "supplies",
            },
          ],
        },
      ],
    });
  } else if (req.params.listName === "food") {
    res.send({
      listName: "food",
      items: [
        {
          id: 4,
          name: "Apples",
          description: "Eat one every day.",
          type: "food",
        },
        {
          id: 5,
          name: "Cereal",
          description: "Don't forget the milk.",
          type: "food",
        },
        {
          id: 6,
          name: "Coffee",
          description: "Don't forget the milk.",
          type: "food",
        },
        {
          id: 7,
          name: "Pizza",
          description: "A special type of pie.",
          type: "food",
        },
      ],
    });
  }
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
