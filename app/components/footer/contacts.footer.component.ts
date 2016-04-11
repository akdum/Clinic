import { Component, OnInit } from 'angular2/core';
import {ContactsService} from '../../services/contacts.service';
import { Contacts } from '../../data-interfaces/contacts';


@Component({
    selector: 'contacts-footer-component',
    templateUrl: '../app/templates/contacts.footer.component.html'
})
export class ContactsFooterComponent implements OnInit {
    public contact: Contacts;
    
    constructor(private _contactsService: ContactsService){
        this.contact = new Contacts("","","","");
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