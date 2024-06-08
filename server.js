const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

const users = [
  {
    id: 4,
    email: 'bbb@outlook.com',
    password: 'test',
    role: 'student'
  }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Generate a token
    const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', {
      expiresIn: '1h'
    });

    // Send token as a cookie
    res.cookie('token', token, { httpOnly: true }).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
