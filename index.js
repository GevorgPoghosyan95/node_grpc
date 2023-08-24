import 'dotenv/config';
import express from 'express';
import TestController from "./controllers/test.controller";
import container from "./services/test.service";
import PostgresStorage from "./db/postgres.storage";
import {addNums} from "./client";


const app = express();

// Resolve the TestController from the container after registering the services
const testController = container.resolve('testController');

app.get('/',(req,res)=> testController.get(req,res));
app.get('/grpc',async (req,res)=> {
    const x = await addNums(2, 3)
    res.json({response:x})
});

app.listen(5000, async () => {
    await PostgresStorage.init()
    console.log('port 5000 listened!');
});