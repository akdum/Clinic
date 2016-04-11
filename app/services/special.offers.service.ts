import {Injectable} from 'angular2/core';
import { DbService } from './db.service';

@Injectable()
export class SpecialOffersService {
    private _specialOffers: String[] = [];
    
    constructor(private _dbService: DbService) {
    }
    
    getSpecialOffers() {
        if (this._specialOffers.length > 0) {
            return Promise.resolve(this._specialOffers);
        } else {
            return new Promise(resolve => this._dbService.getSpecialOffers().then(function(data) {
                this._specialOffers = data;
                resolve(data);
            }.bind(this)));
        }
    }
}