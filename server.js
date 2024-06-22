import express from "express";
import axios from "axios";
import client from "./client.js";
const app = express();

app.get('/',async(req, res) => {
    const cachedVal = await client.get('todos');

    if(cachedVal) return res.json(JSON.parse(cachedVal));

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data);
})

app.listen(9000);