const express = require('express');
const routes = require('./routes/routes');
const path = require('path');
const bodyParser = require('body-parser')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// create our Express app
const app = express();

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// handle our own routes!
app.use('/', routes);

// listens for http requests on our Port defined in config.json
app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
