import express from "express"

const app = express()

app.get('/', (req, res)=>{
    response.send('hallooo');
});

app.get('/about', (req, res)=>{
    console.log(req.query);
    res.send('ABOUT:');
});

app.get('/products/:id([0-9]*)', (req, res)=>{
    console.log(req.params);
    res.send('Produkter');
});

app.listen(4000, () => {
    console.log('nu kører serveren med express');
});