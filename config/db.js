const mongoose = require('mongoose');
const config = require('config');
mongoURI = 'mongodb://localhost:27017/superrare'
const connectDB = async () => {
	try {
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};
{jwtSecret : "sibghat1997"}
 

module.exports = connectDB;
