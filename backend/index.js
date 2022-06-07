const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const pinRoute = require('./routes/pins');
const userRoute = require('./routes/user');

dotenv.config();

const app = express();

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log('MongoDB connect');
	})
	.catch((err) => console.log(err));

/// api routes
app.use('/api/pins', pinRoute);
app.use('/api/users', userRoute);

app.listen(8800, () => {
	console.log('server is running on port...');
});
