import { Component, AfterContentInit } from 'angular2/core';
import { ContactsService } from '../../../services/contacts.service';
import { Contacts } from '../../../data-interfaces/contacts';

@Component({
    selector: 'map-component',
    templateUrl: '../app/templates/map.component.html'
})

export class MapComponent implements AfterContentInit {
    private _map : any;
    private _intervalId: number;
    private _contact: Contacts;
    
    constructor(private _contactsService: ContactsService) { 

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
            this._map.geoObjects.add(new ymaps.Placemark([56.86207381, 53.28129593], {
                hintContent: 'Клиника'
            }));        
               
            clearInterval(this._intervalId);
        } catch (error) {
            console.log(error);
            clearInterval(this._intervalId);
        }      
    }

}