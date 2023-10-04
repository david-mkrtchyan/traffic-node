import { Request, Response } from 'express';
import Joi from 'joi';

export class StoreMiddleware {
    static validate(req: Request, res: Response, next: Function): void {
        const schema = Joi.object({
            id: Joi.number().required(),
            name: Joi.string().required(),
            points: Joi.array().items(Joi.array().items(Joi.number()))
        })

        const result = schema.validate(req.body);

        result.error ? next(result.error) : next();
    }
}