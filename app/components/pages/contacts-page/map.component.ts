import { Component, AfterContentInit } from 'angular2/core';
import { ContactsService } from '../../../services/contacts.service';
import { Contacts } from '../../../data-interfaces/contacts';
import { UtilitiesService } from '../../../services/utilities.service';

@Component({
    selector: 'map-component',
    templateUrl: '../app/templates/map.component.html'
})

export class MapComponent implements AfterContentInit {
    private _map : any;
    private _intervalId: number;
    private _contact: Contacts;
    
    constructor(private _contactsService: ContactsService, private _utilities:UtilitiesService) { 
        this._contact = this._utilities.getBlankContacts();
    }

    ngAfterContentInit() {
        this._contactsService.getContacts().then(function(data) {
            this._contact = data;
            this.init();
        }.bind(this));
    }
    
    init() {
        try {
            this._map = new ymaps.Map("map", {
                center: [this._contact.location[0], this._contact.location[1]],
                zoom: 16
            });
            this._map.geoObjects.add(new ymaps.Placemark([this._contact.baloon[0], this._contact.baloon[1]], {
                hintContent: 'Клиника'
            }));        
               
            clearInterval(this._intervalId);
        } catch (error) {
            console.log(error);
            clearInterval(this._intervalId);
        }      
    }

}