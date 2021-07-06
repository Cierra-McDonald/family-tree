const express = require('express');
const app = express();
const cors = require('cors');


// import express from 'express';
// import notFoundMiddleware from './middleware/not-found.js';
// import errorMiddleware from './middleware/error.js';


app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded());


app.use('/api/v1/trees', require('./controllers/trees'));
app.get('/test', (req, res) => { 
  res.json({ greeting: 'Hello World!' });

});


app.get('/', (req, res) => { 
  res.json('you are here!');

});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

// export default app;
module.exports = app;
