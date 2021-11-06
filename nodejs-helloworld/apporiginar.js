var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! El mensaje es $APP_MSG\n');
  var mensaje =$APP_MSG;	
  console.log(mensaje);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

