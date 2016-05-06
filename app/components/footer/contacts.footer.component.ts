import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts.service';
import { Contacts } from '../../data-interfaces/contacts';
import { UtilitiesService } from '../../services/utilities.service';


@Component({
    selector: 'contacts-footer-component',
    templateUrl: '../app/templates/contacts.footer.component.html'
})
export class ContactsFooterComponent implements OnInit {
    public contact: Contacts;
    
    constructor(private _contactsService: ContactsService, private _utilities:UtilitiesService){
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
    
}