const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});


const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Name field required!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 3,
  review: "Okay"
});

// fruit.save();

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 10,
    review: "The Best ever!"
})

pineapple.save();

const people = new People ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});

// people.save();



// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The Best!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Great!"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "Good Stuff!"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB!")
//   }
// });

Fruit.find(function(err,fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
});


People.updateOne({_id: "5ee91a09b62e7632a03c7c0c"}, {favoriteFruit: pineapple}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document!");
    }
})

// Fruit.updateOne({_id: "5ee8e506cce1f84168b9cd52"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!");
//     }
// })

// Fruit.deleteOne({ _id: "5ee8e506cce1f84168b9cd52"}, function (err) {
//   if (err) return handleError(err);
// });

// People.deleteMany({ name: /Amy/ }, function (err) {
//   if (err) return handleError(err);
// });

// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
