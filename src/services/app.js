import http from 'http'
import express from './services/express'
import api from './api'
import mongoose from './services/mongoose'


const mongouri="mongodb://localhost:27017/RegistrationDetails";
const port=4000;

const app = express('', api)
const server = http.createServer(app)

mongoose.connect(mongouri)
mongoose.Promise=Promise

setImmediate(()=>{
    server.listen(port,()=>{
        console.log(`express server listening to the port ${port}`);
    })
})
export default app