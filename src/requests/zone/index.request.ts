import { ZoneInterface } from '../../interfaces';
import { ZONE_COLUMNS } from '../../constants';
import { Request, Response } from 'express';
import { parse } from 'csv';
import fs from 'fs';

export class IndexRequest {
    private filename = "db.csv";
    private columns = ZONE_COLUMNS;

    public getZones(req: Request, res: Response, next: Function): void {
        const rows: ZoneInterface[] = [];
        const results: ZoneInterface[] = [];

        fs.createReadStream(this.filename)
            .pipe(parse({ delimiter: ",", from_line: 1 }))
            .on('data', (row) => rows.push(row))
            .on('end', () => {
                this.collectZoneData(rows, results);
                results.sort((a: ZoneInterface, b: ZoneInterface) => a.id - b.id);
                res.status(200).json(results);
            })
            .on('error', (error) => next(error))
    }

    private collectZoneData(rows: any[], results: any[]): void {
        if (!rows.length) {
            results = [];
            return;
        }

        rows.forEach(row => {
            const result: any = {};
            this.columns.map((item: string, index: number) => result[item] = row[index])
            results.push(result)
        })
    }
}