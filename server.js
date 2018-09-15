const express = require("express");

const app = express();

app.get("/api/phones", (req, res) => {
  const phones = [
    {
      title: "iPhone 7",
      imagesrc: "./client/src/images/iphone-7.jpg",

      color: "black",
      description: "Apple 7 Teléfono inteligente 4G - Pantalla Retina HD",
      price: "500€"
    },
    {
      title: "Samsung Galaxy S7",
      imagesrc: "./images/Samsung-Galaxy-S7.jpg",
      color: "black",
      description:
        "Samsung Galaxy S7 / G930F / G930FD 5.1 inch Android 6.0 Ram",
      price: "300€"
    }
  ];

  res.json(phones);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
