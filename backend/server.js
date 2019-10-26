const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require('cors');
const testRoute = require("./routes/test");

console.log("starting server.js");

router.use(cors());

// routes go here
router.use((req, res, next) => {
  console.log(req.method, req.url);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, User-Agent"
  );
  bodyParser.json();
  next();
});

// Home Page
app.get("/", (req, res) => {
  res.render("App.js");
});

// get reviews from social medias
router.get('/get/:socialMedia/reivew', (req, res) => {
  a = [] // array of reviews
  let obj =
    db.collection('companies')
      .doc(req.param.socialMedia)
      .collection('reviews')
      .onSnapshot(snap.docs) // querysnapshot of array eg. (3) [QueryDocumentSnapshot, QueryDocumentSnapshot, QueryDocumentSnapshot]
  req.setEncoding(obj);
})

// app.use('/api', testRoute);

// creating a server
app.listen(3000, function () {
  console.log('listening on 3000, go to localhost:3000');
})