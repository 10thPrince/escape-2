import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import cors from 'cors'

dotenv.config();

dbConnect();

const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'App running Successfully' })
})

app.use(cors({
    origin: ['http://localhost:3500'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(notFound);
// app.use(errorHandler);

app.use('/api/user', userRoutes);
app.use('/api/projects', projectsRoutes);

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})