const express = require('express');
const cors = require('cors'); 

const app = express();

app.use(cors());


let humanitarianValue = 110;
let peopleReachedValue = 2300;

app.use(express.json());

app.get('/values', (req, res) => {
  res.json({ humanitarianValue, peopleReachedValue });
});

app.post('/updateValues', (req, res) => {
  const { newHumanitarianValue, newPeopleReachedValue } = req.body;
  humanitarianValue = newHumanitarianValue;
  peopleReachedValue = newPeopleReachedValue;
  res.json({ success: true });
});

app.listen(3002, () => {
  console.log('Server is running on port 3002'); 
});