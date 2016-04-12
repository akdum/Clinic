import { Component, AfterContentInit } from 'angular2/core';

@Component({
    selector: 'map-component',
    templateUrl: '../app/templates/map.component.html'
})

export class MapComponent implements AfterContentInit {
    private _map : any;
    private _intervalId: number;
    
    constructor() { }

    ngAfterContentInit() {
        this._intervalId = setInterval(()=>{if (ymaps.Map) { this.init() }},'300');
    }
    
    init() {
        try {
            this._map = new ymaps.Map("map", {
            center: [56.86211253, 53.28120296],
            zoom: 16
            });
            let placemark = new ymaps.Placemark([56.86207381, 53.28129593], {
                hintContent: 'Клиника'
            });
            this._map.geoObjects.add(placemark);           
            clearInterval(this._intervalId);
        } catch (error) {
            console.log(error);
            clearInterval(this._intervalId);
        }      
    }

}