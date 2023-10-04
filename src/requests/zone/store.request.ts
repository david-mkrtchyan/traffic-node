import { ZONE_COLUMNS } from '../../constants';
import { Request, Response } from 'express';
import { stringify } from 'csv';
import fs from 'fs';

export class StoreRequest {
    private columns = ZONE_COLUMNS;
    private filename = "db.csv";

    public create(req: Request, res: Response, next: Function): void {
        const stringifier = stringify({ header: false, columns: this.columns });

        const writableStream = fs.createWriteStream(this.filename, { flags: 'a' });

        stringifier.write(req.body);

        stringifier.pipe(writableStream);

        res.status(200).send({message: 'Zone Stored Successfully'})
    }
}