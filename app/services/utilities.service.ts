import { Injectable } from 'angular2/core';
import { IText } from '../data-interfaces/itext';
import { ServicesGroup } from '../data-interfaces/services.group';
import { Service } from '../data-interfaces/service';
import { Contacts } from '../data-interfaces/contacts';
import { Doctor } from '../data-interfaces/doctor';
import { DoctorViewModel } from '../data-interfaces/doctor.viewmodel';
import { CONFIG } from '../config/config';

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
                                      imageNames: this.getListFromField(textList[index+2]).map((val)=>this.getStringFromField(val))});  
                }                         
            }
            return returnList;
        } else return [];
    }
    
    getBlankServicesGroup():ServicesGroup {
        return new ServicesGroup("","","","", []);
    }
    
    getBlankService(): Service {
        return new Service("","","","",false,false,"",[]);
    }
    
    getBlankContacts(): Contacts {
        return new Contacts("","",[],[],"","","");
    }
    
    replaceOrAddItemInArrayByUrl(array, item, url) {
        let index = array.findIndex((val)=>val.url === url);
        if (index > -1) {
            array[index] = item;
        } else {
            array.push(item);
        }
    }
    
    convertDoctorArrayToDoctorViewModelArray(doctors: Doctor[]):DoctorViewModel[] {
        return doctors.map(d=>new DoctorViewModel(d.name, 
                                                d.therapy, 
                                                d.url,
                                                CONFIG.DB.BUCKETS.DOCTORS_PHOTO + d.photoName,
                                                d.text));
    }
    
    findBootstrapEnvironment():string {
        var envs = ['xs', 'sm', 'md', 'lg'];

        var $el = $('<div>');
        $el.appendTo($('body'));

        for (var i = envs.length - 1; i >= 0; i--) {
            var env = envs[i];

            $el.addClass('hidden-'+env+'-up');
            if ($el.is(':hidden')) {
                $el.remove();
                return env;
            }
        }
    }
}