const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var uID = '58b696fb68cf2a920d544440';

if (!ObjectID.isValid(uID)) {
  console.log('ID not valid');
}else {
  User.findById(uID).then((user) => {
    if(!user){
      return console.log('Id not found');
    }
    console.log('Todo by ID', user);
  }).catch((e) => console.log(e));
}

var id = '58b7fe97286ebeee2b1a6a3f';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
} else{
  Todo.findById(id).then((todo) => {
    if(!todo){
      return console.log('Id not found');
    }
    console.log('Todo by ID', todo);
  }).catch((e) => console.log(e));

}


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
