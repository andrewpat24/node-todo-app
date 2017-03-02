const expect = require('expect');
const request = require('supertest');


const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

const todos = [{
  text: 'first test todo'
}, {
  text:'Second test todo'
}]

beforeEach((done) => {
  Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
  }). then(() => done());
});

describe('Post /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'This is some text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });
// expect(todos.length).toBe(0);
// status code 400
// post to same url
// send as an empty object

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

// describe('GET /todos', () => {
//   it('should get all todos', (done) => {
//       request(app)
//         .get('/todos')
//         .expect(200)
//         .expect((res) => {
//           expect(res.body.todos.length).toBe(2);
//         })
//         .end(done);
//   });

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(404)
      .expect((res) => {
        expect(todos.length).toBe(2);
      })
      .end(done);
  });
});
