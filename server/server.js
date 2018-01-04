const path = require('path');
const express = require('express');
const app = express();
const distPatch = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

app.use(express.static(distPatch));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPatch, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});