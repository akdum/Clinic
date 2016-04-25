import { Injectable } from 'angular2/core';
import { Service } from '../data-interfaces/service';
import { ServicesGroup } from '../data-interfaces/services.group';
import { DbService } from './db.service';
import { UtilitiesService } from './utilities.service';

@Injectable()
export class ServicesService {
    private _services: Service[] = [];
    private _serviceGroups: ServicesGroup[] = [];
    private _groupedServices: any = [];     
    
    constructor(private _db: DbService, private _utilities: UtilitiesService) {
    }
    
    //Get all services.
    getServices() {
        if (this._services.length > 0) {
            return Promise.resolve(this._services);
        } else {
            return new Promise(resolve=> this._db.getServices().then(function(data){
                this._services = data;
                resolve(this._services);
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
    
    getServicesToShowOnMainPage() {
        if (this._services.length > 0) {
            return Promise.resolve(this._services.filter((value)=>value.showOnMainPage));
        } else {
            return new Promise(resolve=> this._db.getServices().then(function(data){
                this._services = data;
                resolve(this._services.filter((value)=>value.showOnMainPage));
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        }
    }
    
    getPopularServices() {
        if (this._services.length > 0) {
            return Promise.resolve(this._services.filter((value)=>value.isPopular));
        } else {
            return new Promise(resolve=> this._db.getServices().then(function(data){
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
                this._groupedServices[i]["popular_services"] = [];
                
                groupServices.forEach(service=>{
                    if (service.isPopular) this._groupedServices[i].popular_services.push(service); 
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
           let promiseArray: [Promise<Service[]>, Promise<ServicesGroup[]>] = [this.getServices(), this.getServiceGroups()];
                       
           return new Promise(resolve => Promise.all(promiseArray).then(function (results:any[]) {
                resolve(this.tryGetServiceGroupDetails(url));
            }.bind(this)));
        }
    }
    
    // get service by url.
    getServiceByUrl(url:string):Promise<Service> {
        if (this._services.length > 0) {
            return this.tryGetService(url);
        } else {
            // try load services array first.
            return new Promise(resolve=> this.getServices().then(function (data) {
                this._services = data;
                resolve(this.tryGetService(url));
            }.bind(this)));
        }
    }
    
    tryGetServiceGroupDetails(url:string) {
        let services:ServicesGroup = this._serviceGroups.find((val)=>val.url == url);
        
        if (services) {
            if (services.text.length > 0) {
                return Promise.resolve(services);
            } else {
                return new Promise(resolve=>this._db.getServicesGroupDetailsByName(services.title).then(function(data) {
                    services = data;
                    services["services"] = this._services.filter((val)=>val.group === services.title);
                    this._utilities.replaceOrAddItemInArrayByUrl(this._serviceGroups, services, url);
                    resolve(services);
                }.bind(this)));
            }
        } else {
            return Promise.resolve(this._utilities.getBlankServicesGroup());
        }
    }
    
    tryGetService(url:string):Promise<Service> {
        let service: Service = this._services.find((val)=>val.url === url);
        
        if (service) {
            if (service.text.length > 0) {
                return Promise.resolve(service);
            } else {
                return new Promise(resolve=>this._db.getServiceDetailsByName(service.title).then(function (data){
                    service = data;
                    this._utilities.replaceOrAddItemInArrayByUrl(this._services, service, url);
                    resolve(service);
                }.bind(this)));
            }
        } else {
            return Promise.resolve(this._utilities.getBlankService());            
        }
    }
}