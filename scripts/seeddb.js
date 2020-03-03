const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/prehab"
);

const userSeed = [
  {
    firstName: "bhav",
      lastName: "nuth",
   email: "bhavana@gmail.com",
      password: "abc123"
  
  }
];




db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
  
  const favoriteSeed = [
    {
      media_id:"2058854493237584990_3104565825"
    
    }
  ];

  db.Favorite
  .remove({})
  .then(() => db.Favorite.collection.insertMany(favoriteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  


