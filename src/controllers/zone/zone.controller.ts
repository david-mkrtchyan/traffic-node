import { DeleteRequest, IndexRequest, StoreRequest } from '../../requests';
import { Request, Response } from 'express';

export class ZoneController {
    static index(req: Request, res: Response, next: Function) {
        const request = new IndexRequest();

        request.getZones(req, res, next);
    }

    static store(req: Request, res: Response, next: Function) {
        const request = new StoreRequest();

        request.create(req, res, next);
    }

    static delete(req: Request, res: Response, next: Function) {
        const request = new DeleteRequest();

        request.delete(req, res, next);
    }
}