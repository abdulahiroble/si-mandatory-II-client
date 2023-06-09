import express from 'express';
import router from './routes/router.js';
import connectDB from './startup/mongoDB.js';
import cors from 'cors';

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use(router)

connectDB();

const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port", PORT));



