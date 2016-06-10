import { Injectable } from '@angular/core';

import { IText } from '../data-interfaces/itext';
import { IPrice } from '../data-interfaces/iprice';
import { IComment } from '../data-interfaces/icomment';
import { ServicesGroup } from '../data-interfaces/services.group';
import { Service } from '../data-interfaces/service';
import { Contacts } from '../data-interfaces/contacts';
import { Doctor } from '../data-interfaces/doctor';
import { News } from '../data-interfaces/news';
import { About } from '../data-interfaces/about';
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
    
    getListStringsFromField(field:any):string[] {
        return field ? field.L.map(val=>this.getStringFromField(val)) : [];
    }
    
    getListTextFromField(field:any):IText[] {
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
    
    getListCommentsFromField(field:any):IComment[] {
        if (field) {
            let textList = field.L;
            let returnList:Array<IComment> = [];
            for (var index = 0; index < textList.length; index=index+3) {
                if ((index + 2) < textList.length) {
                    returnList.push({ theme:this.getStringFromField(textList[index]),  
                                      short: this.getStringFromField(textList[index+1]), 
                                      extended: this.getStringFromField(textList[index+2])
                    }); 
                }                         
            }
            return returnList;
        } else return [];
    }
    
    getBlankServicesGroup():ServicesGroup {
        return new ServicesGroup("","","","", []);
    }
    
    getBlankService(): Service {
        return new Service("","","","",false,false,"",[],[],[]);
    }
    
    getBlankContacts(): Contacts {
        return new Contacts("","",[],[],"","","");
    }
    
    getBlankNews(): News {
        return new News("",[],0,0);
    }
    
    replaceOrAddItemInArrayByUrl(array, item, url) {
        let index = array.findIndex((val)=>val.url === url);
        if (index > -1) {
            array[index] = item;
        } else {
            array.push(item);
        }
    }
    
    replaceOrAddItemInArrayById(array, item, id) {
        let index = array.findIndex((val)=>val.id === id);
        if (index > -1) {
            array[index] = item;
        } else {
            array.push(item);
        }
    }
    
    convertDoctorArrayToDoctorViewModelArray(doctors: Doctor[]):DoctorViewModel[] {
        return doctors.map(d=>new DoctorViewModel(d.name, 
                                                d.speciality, 
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
    
    getBlankAbout():About {
        return new About([],[],"",[]);
    }
    
    getPricesFromField(field:any):IPrice[] {
        if (field) {
            let textList = field.L;
            let returnList:Array<IPrice> = [];
            for (var index = 0; index < textList.length; index=index+2) {
                if ((index + 1) < textList.length) {
                    returnList.push({ title:this.getStringFromField(textList[index]),  
                                      amount: this.getNumberFromField(textList[index+1])}); 
                    }; 
                }                         
            return returnList;
        } else return [];
    }
    
    getBlankDoctor():Doctor {
        return new Doctor("",[],"","", []);
    }
}