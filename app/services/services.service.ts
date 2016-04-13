import { Injectable } from 'angular2/core';
import { Service } from '../data-interfaces/service';
import { DbService } from './db.service';

@Injectable()
export class ServicesService {
    private _services: Service[] = [];
    
    constructor(private _db: DbService) {
    }
    
    getPopularServices() {
        if (this._services.length > 0) {
            return Promise.resolve(this._services.filter((value)=>value.isPopular));
        } else {
            return new Promise(resolve=> this._db.getServicesItems().then(function(data){
                this._services = data;
                resolve(this._services.filter((value)=>value.isPopular));
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
}