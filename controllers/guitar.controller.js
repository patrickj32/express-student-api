const guitars = [
    {
      "id": 1,
      "brand": "Fender",
      "model": "Stratocaster",
      "color": "Sunburst",
      "price": 999.99,
      "quantity": 5
    },
    {
      "id": 2,
      "brand": "Gibson",
      "model": "Les Paul",
      "color": "Black",
      "price": 1499.99,
      "quantity": 3
    },
    {
      "id": 3,
      "brand": "Ibanez",
      "model": "RG550",
      "color": "Blue",
      "price": 799.99,
      "quantity": 7
    },
    {
      "id": 4,
      "brand": "PRS",
      "model": "Custom 24",
      "color": "Red",
      "price": 1299.99,
      "quantity": 2
    }
  ];
  
  const guitarController = {
    findAll: function (req, res) {
      res.json(guitars);
    },
  
    findById: function (req, res) {
      const found = guitars.find((guitar) => guitar.id === parseInt(req.params.id));
  
      if (found) {
        res.json(found);
      } else {
        res.sendStatus(404);
      }
    },
  
    add: function (req, res) {
      const newGuitar = {
        id: guitars.length + 1,
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity
      };
  
      guitars.push(newGuitar);
      res.status(201).json(newGuitar);
    },
  
    update: function (req, res) {
      let found = guitars.find((guitar) => guitar.id == req.params.id);
  
      if (found) {
        found = Object.assign(found, req.body);
        res.json(found);
      } else {
        res.sendStatus(404);
      }
    },
  
    delete: function (req, res) {
      const guitarIndex = guitars.findIndex((guitar) => guitar.id === parseInt(req.params.id));
  
      if (guitarIndex !== -1) {
        guitars.splice(guitarIndex, 1);
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    },
  };
  
  module.exports = guitarController;
  