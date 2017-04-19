import express from 'express'
import bodyParser from 'body-parser'
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

app.use('/', router);

const server = app.listen(8000, ()=> {
    console.log('Server is running on port 8000')
});