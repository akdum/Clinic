import { Component, AfterContentInit } from 'angular2/core';

@Component({
    selector: 'map-component',
    templateUrl: '../app/templates/map.component.html'
})

export class MapComponent implements AfterContentInit {
    private _map : any;
    
    constructor() { }

    ngAfterContentInit() {
        ymaps.ready(this.init());
    }
    
    init() {
        this._map = new ymaps.Map("map", {
           center: [56.86211253, 53.28120296],
           zoom: 17 
        });
    }

}