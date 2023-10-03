import {Request, Response} from "express";

export class StoreRequest {
    public create(req: Request, res: Response, next: Function): void {
        console.log('store 123')
        res.status(200).send({message: 'Store - Fuck The World'})
    }
}