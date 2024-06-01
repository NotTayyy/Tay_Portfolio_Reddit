import express from "express";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import User from "./models/Users.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

const secret = 'secret123';
const uri = process.env.MONGOPASS;
await mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.log);

app.get('/', (req, res) => {
  res.send('ok');
})

const posts = [
  {
    userName: 'Admin_01',
    postTitle: "The admins don't know what they are Doing!!!",
    postContent: `Lorem ips`
  }
]

app.get('/posts', (req, res) => {
  res.posts()
})

app.post('/register', (req, res) => {
  const {email, username, password} = req.body;
  const user = new User({email, username, password})
  user.save().then(user => {
    jwt.sign({id:user._id}, secret, (err, token) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(201).cookie('token', token).send();
      }
    });
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  });
});

app.listen(4000)