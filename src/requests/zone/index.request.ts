import {Request, Response} from "express";

export class IndexRequest {
    public getZones(req: Request, res: Response, next: Function): void {
        console.log('index 123', IndexRequest)
        res.status(200).send({message: 'Index - Fuck The World'})
    }
}