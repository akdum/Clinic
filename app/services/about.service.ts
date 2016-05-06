import { Injectable } from '@angular/core';

import { DbService } from './db.service';
import { About } from '../data-interfaces/about';

@Injectable()
export class AboutService {
    private _about:About;
    
    constructor(private _db: DbService) { 
    }

    getAboutText():Promise<About>{
        if (this._about) {
            return Promise.resolve(this._about);
        } else {
            return new Promise((resolve)=>this._db.getAbout().then(function (about:About) {
                this._about = about;
                resolve(this._about);
            }.bind(this)));
        }
    }
}