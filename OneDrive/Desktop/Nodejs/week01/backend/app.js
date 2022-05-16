import express from 'express';
import cors from 'cors';
// Routers
import moviesRouter from  './routes/movies.js';
import rentsRouter from  './routes/rents.js';

let app = express();

app.use(express.json());
app.use(cors());

app.use('/movies', moviesRouter);
app.use('/rents', rentsRouter);


app.listen(3000, ()=>{
    console.log("listening on 3000");
});