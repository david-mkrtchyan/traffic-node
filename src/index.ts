import express, { Request, Response , Application } from 'express';
import bodyParser from 'body-parser'
import { router } from './routes';
import morgan from 'morgan';
import {ValidationError} from "joi";
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3200;

app.use(cors({
    origin: '*'
}));

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/v1', router)

app.use((error: any, req: Request, res: Response, next: Function) => {
    if (error instanceof ValidationError) {
        return res.status(422).json({error: error.message || error});
    }

    res.status(error.status || 500).json({error: error.message || error});
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});