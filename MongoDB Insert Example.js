db.products.insert(
  {
  _id: 2,
  name: "Pencil",
  price: 2.00,
  stock: 344,
  reviews: [
    {
      authorName: "Julius",
      rating: 5,
      review: "Best pencil ever!"
    },
    {
      authorName: "Yuki",
      rating: 5,
      review: "Great Pencil!"
    }
  ]
  }
)
