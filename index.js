const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/router');


app.use('/', router);
app.use(express.static('public'));
//motor de plantillas
app.set('view engine','pug');

app.listen(port, () => {
  console.log(`El servidor esta corriendo en http://localhost:${port}`);
});