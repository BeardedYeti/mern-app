import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movies');

//Initialize http server
const app = express();

//Logger that outputs all requests into the console
app.use(morgan('combined'));

// Use api as prefix for all API endpoints
app.use('/api', router);

//Launch server on port 3000
const server = app.listen(3000, () => {
	const { address, port } = server.address();
	console.log(`Magic is happening on port ${port}`);
});