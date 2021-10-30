import express from 'express';
import {createServer} from "http";
import {Server, Socket}  from "socket.io";
import './database';
import {routes} from "../routes";
import {urlencoded} from 'body-parser';
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get('/pages/client', (request, response)=>{
  return response.render("html/client.html")
})

const http = createServer(app); //criando o protocolo http
const io = new Server(http); //criando o protocolo websocket

io.on("connection", (socket: Socket) => {
  console.log("Conectado", socket.id)
});

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(routes);

export {http, io}