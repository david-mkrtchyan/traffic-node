import { Request, Response } from 'express';
import joi from 'joi';
import Joi from "joi";

export class DeleteMiddleware {
    static validate(req: Request, res: Response, next: Function): void {
        const schema = Joi.object({
            id: Joi.number().required(),
        })

        const result = schema.validate(req.params);

        result.error ? next(result.error) : next();
    }
}