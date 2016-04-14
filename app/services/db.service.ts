import {Injectable} from 'angular2/core';
import { CONFIG } from '../config/config';
import { News } from '../data-interfaces/news';
import { Service } from '../data-interfaces/service';
import { Contacts } from '../data-interfaces/contacts';
import { ServiceGroup } from '../data-interfaces/service.group';

@Injectable()
export class DbService {
    private _dynamoDB: any;
    
    constructor() {
        AWS.config.update({accessKeyId: CONFIG.DB.READ.ACCESS_KEY_ID, secretAccessKey: CONFIG.DB.READ.SECRET_ACCESS_KEY});
        AWS.config.region = CONFIG.DB.REGION;
        
        this._dynamoDB = new AWS.DynamoDB();
    };
    
    getNewsItems() {
        var params = {
            "TableName": "News",
            "AttributesToGet": ["Title", "Date"]
        }
        
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                let returnItems: News[] = [];
                if (data.Count>0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnItems.push(new News(data.Items[index].Title.S, "", data.Items[index].Date.N));
                    }
                    returnItems.sort(function(a:News,b:News) {
                        if (a.rawdate < b.rawdate) return 1;
                        if (a.rawdate > b.rawdate) return -1;
                        return 0;
                    })
                }
                resolve(returnItems);
            } else {
                reject(err);
            }
        }));
    }
    
    getServicesItems() {
        var params = {
            "TableName": "Services",
            "AttributesToGet": ["Title", "Body", "ImageBase64","Group", "IsPopular"]
        }
        
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                let returnItems: Service[] = [];
                if (data.Count > 0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnItems.push(new Service(data.Items[index].Title.S, 
                                                        data.Items[index].Body.S,
                                                        data.Items[index].ImageBase64.S,
                                                        data.Items[index].Group.S,
                                                        data.Items[index].IsPopular.BOOL));
                    }
                }
                resolve(returnItems);
            } else {
                console.log(err);
            }
        }));
    }
    
    getServiceGroups() {
        var params = {
            "TableName": "ServiceGroups",
            "AttributesToGet": ["Title", "Body", "ImageBase64"]
        }
        
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                let returnItems: ServiceGroup[] = [];
                if (data.Count > 0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnItems.push(new ServiceGroup(data.Items[index].Title.S, 
                                                        data.Items[index].Body.S,
                                                        data.Items[index].ImageBase64.S));
                    }
                }
                resolve(returnItems);
            } else {
                console.log(err);
            }
        }));
    }
    
    getContacts() {
        var params = {
            "TableName": "Contacts",
            "AttributesToGet": ["CityPhone", "Address", "MobilePhone", "VkGroupAddress", "Location", "Baloon", "WorkHours"]
        }
         
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                if (data.Count > 0) {
                    resolve(new Contacts(data.Items[0].CityPhone.S, 
                                         data.Items[0].MobilePhone.S,
                                         [parseFloat(data.Items[0].Location.L[0].N), parseFloat(data.Items[0].Location.L[1].N)],
                                         [parseFloat(data.Items[0].Baloon.L[0].N), parseFloat(data.Items[0].Baloon.L[1].N)],
                                         data.Items[0].VkGroupAddress.S,
                                         data.Items[0].Address.S,
                                         data.Items[0].WorkHours.S
                                         ));   
                } else resolve(new Contacts("нет данных", "нет данных", [], [], "нет данных","нет данных","нет данных"));
            } else {
                reject(err);
            }
        }));
    }
    
    getSpecialOffers() {
        var params={
            "TableName": "Special-offers",
            "KeyConditionExpression": "Title = :title and StartDate <= :date",
            "FilterExpression": "EndDate >= :date",
            "ExpressionAttributeValues": {
                ":title" : {
                    S: "Специальное предложение"
                },
                ":date" : {
                    N: (new Date()).getTime().toString()
                }
            }
        }
        
        return new Promise((resolve, reject)=>this._dynamoDB.query(params, (err,data)=>{
            if (err == null) {
                let returnData : String[] = [];
                if (data.Count > 0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnData.push(data.Items[index].ImageBase64.S);
                    }
                }
                resolve(returnData);
            } else {
                console.log(err);
            }
        }));
    }
    
}