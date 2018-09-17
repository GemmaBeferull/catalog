const express = require("express");

const app = express();

app.get("/api/phones", (req, res) => {
  const phones = [
    {
      id: 1,
      title: "SAMSUNG J5",
      imagesrc: "https://tarifas.masmovil.es/img/samsung-j5.png",
      color: "Black",
      description: "Con la tarifa de Fibra + Móvil 12GB",
      price: "Gratis"
    },
    {
      id: 2,
      title: "Alcatel U5",
      imagesrc: "https://tarifas.masmovil.es/img/alcatel-U5.jpg",
      color: "Black",
      description: "Con tarifas de Fibra + Móvil",
      price: "Gratis"
    },
    {
      id: 3,
      title: "LG K9",
      imagesrc: "https://tarifas.masmovil.es/img/k9.jpg",
      color: "Black",
      description: "Con tarifas de Fibra + Móvil 8GB",
      price: "Gratis€"
    },
    {
      id: 4,
      title: "SAMSUNG",
      imagesrc: "https://tarifas.masmovil.es/img/samsung-j5.png",

      color: "Black",
      description: "Con la tarifa de Fibra + Móvil 12GB",
      price: "Gratis"
    },
    {
      id: 5,
      title: "Alcatel U5",
      imagesrc: "https://tarifas.masmovil.es/img/alcatel-U5.jpg",
      color: "Black",
      description: "Con tarifas de Fibra + Móvil",
      price: "Gratis"
    },
    {
      id: 6,
      title: "LG K9",
      imagesrc: "https://tarifas.masmovil.es/img/k9.jpg",
      color: "Black",
      description: "Con tarifas de Fibra + Móvil 8GB",
      price: "Gratis€"
    }
  ];

  res.json(phones);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
