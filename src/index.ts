import express, { Request, Response , Application } from 'express';
import morgan from 'morgan';
import { router } from './routes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
)

app.use('/api/v1', router)

app.use((error: any, req: Request, res: Response, next: Function) => {
    res.status(error.status || 500).json({error: error.message || error});
});

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});