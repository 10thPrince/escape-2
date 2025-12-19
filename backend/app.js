import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import projectsRoutes from './routes/projectsRoutes.js';
import cors from 'cors';
import path from 'path'
import cron from 'node-cron'

dotenv.config();

dbConnect();

const port = process.env.PORT || 3001;
const app = express();

cron.schedule('*/14 * * * *', ()=>{
    console.log('running 14min');
})

// setTimeout(()=>{
//     console.log('*')
// }, 5 *60 *1000)

app.use(cors({
    origin: ['http://localhost:3500', 'https://escape-2-8si5.vercel.app/'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(notFound);
// app.use(errorHandler);

app.use('/api/user', userRoutes);
app.use('/api/projects', projectsRoutes);

// if (process.env.NODE_ENV === 'production') {
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'), (err) => {
//             if (err) {
//                 console.error('Error serving index.html:', err);
//                 res.status(500).send('Server Error');
//             }
//         })
//     })
// } else {
//     
// }

//res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
app.get('/', (req, res) => {
    res.status(200).json({ message: 'App running Successfully' })
})
app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})