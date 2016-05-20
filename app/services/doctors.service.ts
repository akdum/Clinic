import { Injectable } from '@angular/core';

import { DbService } from './db.service';
import { Doctor } from '../data-interfaces/doctor';

@Injectable()
export class DoctorsService {
    private _doctors: Doctor[] = [];
    
    constructor(private _db:DbService) { }
    
    getDoctorsByUrls(urls:string[]):Promise<Doctor[]> {
        if (this._doctors.length > 0) {
            return Promise.resolve(this.filterDoctorsByUrls(urls));
        } else {
            // try to load doctors first.
            return new Promise(resolve=> this._db.getDoctors().then(function (data:Doctor[]) {
                this._doctors = data;
                resolve(this.filterDoctorsByUrls(urls));
            }.bind(this)));
        }
    }  
    
    getDoctors():Promise<Doctor[]> {
        if (this._doctors.length>0) {
            return Promise.resolve(this._doctors);
        } else {
            return new Promise(resolve=>this._db.getDoctors().then(function (data:Doctor[]) {
                this._doctors = data;
                resolve(this._doctors);
            }.bind(this)));
        }
    }
    
    private filterDoctorsByUrls(urls:string[]):Doctor[] {
        let returnArray: Doctor[] = [];
        
        urls.forEach(url=>{
           let doctor = this._doctors.filter(d=>d.url === url);
           if (doctor.length > 0) returnArray.push(doctor[0]); 
        });
        
        return returnArray;
    }
}