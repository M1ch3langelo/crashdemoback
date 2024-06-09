import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use(express.json());

// Start server
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(routes);