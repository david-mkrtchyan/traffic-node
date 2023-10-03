import {Request, Response} from "express";

export class DeleteRequest {
    public delete(req: Request, res: Response, next: Function): void {
        console.log('delete 123')
        res.status(200).send({message: 'Delete - Fuck The World'})
    }
}