const app = require('express')();
const bodyParser = require('bodyParser');

const routes = require('./app/routes');

app.use(bodyParser.json());

app.use('/app', routes);

app.listen(process.env.PORT, process.env.IP);