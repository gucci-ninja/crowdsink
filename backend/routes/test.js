var express = require('express');
var router = express.Router();
const db = require('../../src/config');

const { testModel } = require('../models/testModel');

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

module.exports = router;
