import express from 'express';
import gqlInit from './graphql/init';
import path from 'path';
import bodyParser from 'body-parser';
import cors from "cors";
import routes from './routes';

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());

app.use('/', routes);

gqlInit(app)

export default app;