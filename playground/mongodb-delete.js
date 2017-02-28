const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log(`Unable to connect to MongoDB server`);

  }
  console.log(`Connected to MongoDB server`);

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   _id: new ObjectID('58acad9ed006846c8569ba2c')
  // }).then((result) => {
  //   console.log(result);
  // });
  // db.close();

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58acb0af4a6af96de986165b")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  })
});
