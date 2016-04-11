import { Injectable } from 'angular2/core';
import { Service } from '../data-interfaces/service';
import { DbService } from './db.service';

@Injectable()
export class ServicesService {
    private _services: Service[] = [];
    
    constructor(private _db: DbService) {
    }
    
    getListOfServices() {
        if (this._services.length > 0) {
            return Promise.resolve(this._services);
        } else {
            return new Promise(resolve=> this._db.getServicesItems().then(function(data){
                this._services = data;
                resolve(this._services);
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
    
    getShortListOfServices(first:number) {
        if (this._services.length > 0) {
            return Promise.resolve(this._services.slice(0, first));
        } else {
            return new Promise(resolve=> this._db.getServicesItems().then(function(data){
                this._services = data;
                resolve(this._services.slice(0, first));
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
    
    getRangeOfServices(first:number, last:number) {
        if (this._services.length > 0) {
            return Promise.resolve(this._services.slice(first, last));
        } else {
            return new Promise(resolve=> this._db.getServicesItems().then(function(data){
                this._services = data;
                resolve(this._services.slice(first, last));
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
}