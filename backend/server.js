const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(PORT, () => {
  console.log(`Server Running in http://localhost:${PORT}`);
});