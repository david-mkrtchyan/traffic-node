import { Request, Response } from 'express';
import fs from 'fs';

export class DeleteRequest {
    public delete(req: Request, res: Response, next: Function): void {

        fs.readFile('db.csv', 'utf8', function(error, data)
        {
            if (error) {
                return next(error)
            }

            const items = data.split('\n').filter((item: string) => item);

            let output: any = items.filter((item: string) => +item.split(',')[0] !== +req.params.id);

            output[output.length - 1] = output[output.length - 1] + "\n";

            output = output.join("\n")

            fs.writeFileSync('db.csv', output);

            res.status(200).send({message: `Zone with ID - ${req.params.id} removed successfully`})
        });
    }
}
