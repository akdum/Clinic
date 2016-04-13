import { Component, OnInit} from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    templateUrl: '../app/templates/services.page.component.html'
})
export class ServicesPageComponent implements OnInit {
    private _servicesList: Service[];
    private _rows = [];
    
    constructor(private _services: ServicesService) {
    }
    
    ngOnInit() {
        this._services.getListOfServices().then(function (data) {
            this._servicesList = data;
            this.prepareRows();
         }.bind(this))   
    }
    
    prepareRows() {
        let count = Math.floor(this._servicesList.length/3);
        let reminder = this._servicesList.length%3;
        if (count && count > 0) {                 
            for (let index = 0; index < count; index++) {
                let row = [];
                for(let j = 0; j < 3; j++) {
                    row.push(this._servicesList[index*3 + j]);
                }
                this._rows.push(row);
            }
        }
        if (reminder && reminder > 0) {
            let row = [];
            for (let index = reminder-1; index >= 0; index--) {
                row.push(this._servicesList[this._servicesList.length-index]);
            }
            this._rows.push(row);
        }
    }
}