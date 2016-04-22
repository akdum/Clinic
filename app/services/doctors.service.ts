import { Injectable } from 'angular2/core';
import { DbService } from './db.service';
import { Doctor } from '../data-interfaces/doctor';

@Injectable()
export class DoctorsService {
    private _doctors: Doctor[] = [];
    
    constructor(private _db:DbService) { }

    getDoctorsByTherapy(therapy:string):Promise<Doctor[]> {
        if (this._doctors.length > 0) {
            return Promise.resolve(this._doctors.filter(d=>d.therapy === therapy));
        } else {
            // try to load doctors first.
            return new Promise(resolve=> this._db.getDoctors().then(function (data) {
                this._doctors = data;
                resolve(this._doctors.filter(d=>d.therapy === therapy));
            }.bind(this)));
        }
    }    
}