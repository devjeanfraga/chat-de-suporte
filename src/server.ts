import express from 'express';
import './database';
import {routes} from "../routes"
import {urlencoded} from 'body-parser'

const app = express();

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(routes);

app.listen(8181, ()=> {console.log("api run on port 8181")})