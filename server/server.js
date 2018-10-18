import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'route up', status: 200 }));

// error codes
app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => res.status(error.status || 500).json({ message: 'error', status: 500 }));


app.listen(port, () => console.log(`Server is up on port ${port}`));