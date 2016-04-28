import { Injectable } from 'angular2/core';
import { DbService } from './db.service';
import { IText } from '../data-interfaces/IText';

@Injectable()
export class AboutService {
    private _about:IText[] = [];
    
    constructor(private _db: DbService) { }

    getAboutText():Promise<IText[]>{
        if (this._about.length > 0) {
            return Promise.resolve(this._about);
        } else {
            return new Promise((resolve)=>this._db.getAbout().then(function (text:IText[]) {
                this._about = text;
                resolve(this._about);
            }.bind(this)));
        }
    }
}