const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log(`Unable to connect to MongoDB server`);

  }
  console.log(`Connected to MongoDB server`);

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58b22bc95f296ca4853a0eee")
  // }, {
  //   $set: {
  //     completed: false,
  //     text:'eat dick'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58acaeda0d6a616d186fffd5")
  }, {
    $set: {
      name: 'Stephen'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

});
