const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt');
const cors = require('cors');

const db = knex(require('./knexfile').development);
const app = express();
const saltRounds = 10;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json('All fields are required');
  }

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json('Error hashing password');
    }

    db('users').insert({
      name,
      email,
      password: hash,
      role
    })
    .then(() => res.status(201).json('User registered'))
    .catch(error => {
      console.error('Error inserting user:', error); // Log the error
      res.status(400).json('Unable to register user');
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received email:', email, 'and password:', password);
  if (email && password) {
      // Verwerk het verzoek
      res.status(200).json({ message: 'Login successful' });
  } else {
      res.status(400).json({ message: 'Invalid email or password' });
  }
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
