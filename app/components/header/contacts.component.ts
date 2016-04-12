import {Component, OnInit} from 'angular2/core';
import {AssetsService} from '../../services/assets.service';
import {ContactsService} from '../../services/contacts.service';
import { Contacts } from '../../data-interfaces/contacts';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'contacts-component',
    templateUrl: '../app/templates/contacts.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ContactsComponent implements OnInit {
    public isContactTabActive: Boolean;
    public contact: Contacts;
    
    constructor(private _assetsService: AssetsService, private _contactsService: ContactsService) {
        this.isContactTabActive = true;
        this.contact = new Contacts("","",[],[],"","","");
    }
    
    ngOnInit() {
        this.getContacts();
    }
    
    getContacts() {
        this._contactsService.getContacts().then(function(data) {
            this.contact = data;
        }.bind(this));
    }
    
    SetActiveTab($event) {
        this.isContactTabActive = !this.isContactTabActive;
    }
    
}