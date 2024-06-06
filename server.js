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

export const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Zoek de gebruiker in de database op basis van het e-mailadres
    const user = await db('users').where({ email }).first();

    // Als de gebruiker niet bestaat, stuur dan een foutmelding terug
    if (!user) {
      req.flash = {
        type: "danger",
        message: "Gebruiker bestaat niet",
      };
      console.log('User does not exist'); // Log user not found
      return next();
    }

    // Als de gebruiker bestaat, controleer dan het wachtwoord
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      req.flash = {
        type: "danger",
        message: "Wachtwoord is fout",
      };
      console.log('Incorrect password'); // Log incorrect password
      return next();
    }

    // Als het wachtwoord overeenkomt, log dan in
    console.log('Login successful'); // Log successful login
    return res.redirect("/");

  } catch (error) {
    console.error('Error logging in:', error);
    req.flash = {
      type: "danger",
      message: "Er is een fout opgetreden bij het inloggen",
    };
    return next();
  }
};




app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
