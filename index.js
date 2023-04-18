let data = [
  {
    name: "Samosa",
    price: 19,
    quantity: 3,
  },
  {
    name: "Samosa",
    price: 20,
    quantity: 2,
  },
  {
    name: "Biriyani",
    price: 100,
    quantity: 2,
  },
  {
    name: "Dosa",
    price: 12,
    quantity: 1,
  },
  {
    name: "Dosa",
    price: 12,
    quantity: 5,
  },
];

orderSchema.aggregate({
  $group: { _id: "$name", quant: { $sum: "$quantity" } },
});
