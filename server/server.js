import express from 'express'
import bodyParser from 'body-parser'
import path from 'path';
import ejs from 'ejs';

import router from './routers/router.js'
import * as db from './utils/dbutils.js'

const app = express();

db.setUpConnect();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    return next();
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, '..', 'public'));
app.set('view engine', 'html');

app.use('/', router);

const server = app.listen(process.env.PORT || 8000, ()=> {
    console.log('Server is running on port 8000')
});