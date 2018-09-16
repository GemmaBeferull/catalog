const express = require("express");

const app = express();

app.get("/api/phones", (req, res) => {
  const phones = [
    {
      title: "iPhone 7",
      imagesrc:
        "https://www.ishopperu.com.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7--space-grey.jpg",

      color: "black",
      description: "Apple 7 Teléfono inteligente 4G - Pantalla Retina HD",
      price: "500€"
    },
    {
      title: "Samsung Galaxy S7",
      imagesrc:
        "https://www.aca-electronic.com/60-thickbox_default/samsung-galaxy-s7-edge-g935f-55-inch-rom-32gb-lte-ram-4gb.jpg",
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
