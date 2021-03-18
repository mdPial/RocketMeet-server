import cors from 'cors';
import express, { Application } from 'express';
import expressPino, { HttpLogger } from 'express-pino-logger';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import pino, { Logger } from 'pino';



const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 50, // limit each IP to 50 requests per windowMs
});

const app: Application = express();

app.use(helmet());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
}

app.use(limiter);


export default app;
