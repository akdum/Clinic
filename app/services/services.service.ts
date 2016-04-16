import { Injectable } from 'angular2/core';
import { Service } from '../data-interfaces/service';
import { ServicesGroup } from '../data-interfaces/services.group';
import { DbService } from './db.service';

@Injectable()
export class ServicesService {
    private _services: Service[] = [];
    private _serviceGroups: ServicesGroup[] = [];
    private _groupedServices: any = [];     
    
    constructor(private _db: DbService) {
    }
    
    //Get all services.
    getServices() {
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
    
    getServiceGroups() {
        if (this._serviceGroups.length > 0) {
            return Promise.resolve(this._serviceGroups);
        } else {
            return new Promise(resolve=> this._db.getServiceGroups().then(function(data){
                this._serviceGroups = data;
                resolve(this._serviceGroups);
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
    
    getServicesGrouped() {
        let promiseArray: [Promise<Service[]>, Promise<ServicesGroup[]>] = [this.getServices(), this.getServiceGroups()];
        return new Promise(resolve => Promise.all(promiseArray).then(function (results:any[]) {
            this._groupedServices = [];
            this._serviceGroups.forEach((group,i) => {
                this._groupedServices.push(group);
                let groupServices = this._services.filter((value)=>value.group == group.title);
                this._groupedServices[i]["services"] = [];
                groupServices.forEach(service=>{    
                    this._groupedServices[i].services.push(service);         
                });
            });
            resolve(this._groupedServices);
        }.bind(this)));
    }
    
    getServicesGroupByUrl(url:string) {
        if (this._serviceGroups.length > 0) {
            return this.tryGetServiceGroupDetails(url);
        } else {
            // try to load groups first.
           return new Promise(resolve=>this.getServiceGroups().then(function(data) {
                resolve(this.tryGetServiceGroupDetails(url));
            }.bind(this)));
        }
    }
    
    tryGetServiceGroupDetails(url:string) {
        let services:ServicesGroup = this._serviceGroups.find((val)=>val.url == url);
        
        if (services) {
            if (services.text != null) {
                return Promise.resolve(services);
            } else {
                return new Promise(resolve=>this._db.getServicesGroupDetailsByName(services.title).then(function(data) {
                    services = data;
                    let index = this._serviceGroups.findIndex((val)=>val.url == url);
                    if (index > -1) {
                        this._serviceGroups[index] = services;
                    } else {
                        this._serviceGroups.push(services);
                    }
                    resolve(services);
                }.bind(this)));
            }
        } else {
            return Promise.resolve(new ServicesGroup("","","","",[]));
        }
    }
}