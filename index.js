// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Im right here!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
