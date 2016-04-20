import {Injectable} from 'angular2/core';
import { CONFIG } from '../config/config';
import { News } from '../data-interfaces/news';
import { Service } from '../data-interfaces/service';
import { Contacts } from '../data-interfaces/contacts';
import { ServicesGroup } from '../data-interfaces/services.group';
import { IText } from '../data-interfaces/itext';
import { UtilitiesService } from './utilities.service';

@Injectable()
export class DbService {
    private _dynamoDB: any;
    
    constructor(private _utilities: UtilitiesService) {
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
                        returnItems.push(new News(this._utilities.getStringFromField(data.Items[index].Title),
                                                  "", 
                                                  this._utilities.getNumberFromField(data.Items[index].Date)));
                    }
                    returnItems.sort(function(a:News,b:News) {
                        if (a.rawdate < b.rawdate) return 1;
                        if (a.rawdate > b.rawdate) return -1;
                        return 0;
                    })
                }
                resolve(returnItems);
            } else {
                console.log(err);
            }
        }));
    }
    
    getServicesItems() {
        var params = {
            "TableName": "Services",
            "AttributesToGet": ["Title", "Body", "IconName","Group", "IsPopular"]
        }
        
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                let returnItems: Service[] = [];
                if (data.Count > 0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnItems.push(new Service(this._utilities.getStringFromField(data.Items[index].Title), 
                                                     this._utilities.getStringFromField(data.Items[index].Body),
                                                     CONFIG.DB.BUCKETS.ICONS_URL + this._utilities.getStringFromField(data.Items[index].IconName),
                                                     this._utilities.getStringFromField(data.Items[index].Group),
                                                     this._utilities.getBooleanFromField(data.Items[index].IsPopular)));
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
            "AttributesToGet": ["Title", "Body", "IconName", "Url"]
        }
        
        return new Promise((resolve, reject)=> this._dynamoDB.scan(params, (err, data)=>{
            if (err == null) {
                let returnItems: ServicesGroup[] = [];
                if (data.Count > 0) {
                    for (var index = 0; index < data.Count; index++) {
                        returnItems.push(new ServicesGroup(this._utilities.getStringFromField(data.Items[index].Title), 
                                                           this._utilities.getStringFromField(data.Items[index].Body),
                                                           CONFIG.DB.BUCKETS.ICONS_URL + this._utilities.getStringFromField(data.Items[index].IconName),
                                                           this._utilities.getStringFromField(data.Items[index].IconName),
                                                        []));
                    }
                }
                resolve(returnItems);
            } else {
                console.log(err);
            }
        }));
    }
    
    getServicesGroupDetailsByName(name:string) {
        var params={
            "TableName": "ServiceGroups",
            "KeyConditionExpression": "Title = :title",
            "ExpressionAttributeValues": {
                ":title" : {
                    S: name
                }
            }
        }
        
        return new Promise((resolve, reject)=>this._dynamoDB.query(params, (err,data)=>{
            if (err == null) {
                let returnData : ServicesGroup;
                if (data.Count > 0) {
                    returnData = new ServicesGroup(this._utilities.getStringFromField(data.Items[0].Title),
                                                   this._utilities.getStringFromField(data.Items[0].Body),
                                                   CONFIG.DB.BUCKETS.ICONS_URL + this._utilities.getStringFromField(data.Items[0].IconName),
                                                   this._utilities.getStringFromField(data.Items[0].Url), 
                                                   this._utilities.getListTextFromField(data.Items[0].Text))
                }
                resolve(returnData);
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