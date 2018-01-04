const path = require('path');
const express = require('express');
const app = express();
const distPatch = path.join(__dirname, '..', 'dist');

app.use(express.static(distPatch));

app.get('*', (req, res) => {
  console.log('get any');
  res.sendFile(path.join(distPatch, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up!');
});