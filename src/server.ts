import express from 'express'
import './database'

const app = express()

app.listen(8181, ()=> {console.log("api run on port 8181")})