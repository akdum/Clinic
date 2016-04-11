import {Injectable} from 'angular2/core';
import { Contacts } from '../data-interfaces/contacts';
import { DbService } from './db.service';

@Injectable()
export class ContactsService {
    private _contacts: Contacts;
    
    constructor(private _db: DbService) {
    }
    
    getContacts() {
        if (this._contacts == null) {
            return new Promise(resolve=> this._db.getContacts().then(function(data){
                this._contacts = data;
                resolve(this._contacts);
            }.bind(this)).catch(function(err:any) {
                console.log(err);
            }));
        } else {
            return Promise.resolve(this._contacts);
        }
    }
}
