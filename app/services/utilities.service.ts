import { Injectable } from 'angular2/core';
import { IText } from '../data-interfaces/itext';
import { ServicesGroup } from '../data-interfaces/services.group';
import { Service } from '../data-interfaces/service';

@Injectable()
export class UtilitiesService {
    getStringFromField(field:any):string {
        return field ? field.S : "";
    };
    
    getNumberFromField(field:any):number {
        return field ? field.N : 0;
    };
    
    getBooleanFromField(field:any):boolean {
        return field ? field.BOOL : false;
    }
    
    getListFromField(field:any) {
        return field ? field.L : [];
    }
    
    getListTextFromField(field:any) {
        if (field) {
            let textList = field.L;
            let returnList:Array<IText> = [];
            for (var index = 0; index < textList.length; index=index+3) {
                if ((index + 2) < textList.length) {
                    returnList.push({ heading: this.getStringFromField(textList[index]), 
                                      value: this.getStringFromField(textList[index+1]), 
                                      imagesBase64: this.getListFromField(textList[index+2]).map((val)=>this.getStringFromField(val))});  
                }                         
            }
            return returnList;
        } else return [];
    }
    
    getBlankServicesGroup():ServicesGroup {
        return new ServicesGroup("","","","", []);
    }
    
    getBlankService(): Service {
        return new Service("","","","",false,"");
    }
}