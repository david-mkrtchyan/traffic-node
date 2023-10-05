import { Request, Response } from 'express';
import fs from 'fs';
import {ZoneInterface} from "../../interfaces";

export class ShowRequest {
    public show(req: Request, res: Response, next: Function): void {

        fs.readFile('db.csv', 'utf8', (error, data) =>
        {
            if (error) {
                return next(error)
            }

            const items = data.split('\n').filter((item: string) => item);

            const zone = items.find((item: string) => +item[0] === +req.params.id);

            zone ? res.status(200).json(this.collectZoneData(zone)) : res.status(404).json({message: `Nothing found with id - ${+req.params.id}`})
        });
    }

    private collectZoneData(zone: string): any {
        const strParts = zone.split('"').filter((item: string) => item);
        const itemParts = strParts[0].split(',');
        const items = [...itemParts, strParts[1]].filter((item: string) => item);

        return {
            id: items[0],
            name: items[1],
            points: JSON.parse(items[2])
        }
    }
}