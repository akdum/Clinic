import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AssetsService } from '../../services/assets.service';
import { ContactsService } from '../../services/contacts.service';
import { Contacts } from '../../data-interfaces/contacts';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
    selector: 'contacts-component',
    templateUrl: '../app/templates/contacts.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ContactsComponent implements OnInit {
    public isContactTabActive: Boolean;
    public contact: Contacts;
    
    constructor(private _assetsService: AssetsService, 
                private _contactsService: ContactsService,
                private _utilities: UtilitiesService) {
        this.isContactTabActive = true;
        this.contact = this._utilities.getBlankContacts();
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