import { Component, OnInit } from 'angular2/core';
import { AboutService } from '../../../services/about.service';
import { IText } from '../../../data-interfaces/IText';

@Component({
    templateUrl: '../app/templates/about.page.component.html'
})
export class AboutPageComponent implements OnInit {
    private _about:IText[] = [];
    private _activeTab: string = "";
    
    constructor(private _aboutService:AboutService) { }
    
    ngOnInit() {
        // this._aboutService.getAboutText().then(function (data:IText[]) {
        //     this._about = data;
        // }.bind(this));
    }
    
    SetActiveTab(tab) {
       if (tab.attributes["data-id"]) {
           this._activeTab = tab.attributes["data-id"].value;
       }
    }
    
    IsTabActive(tab) {
        if (tab.attributes["data-id"]) {
            let value = tab.attributes["data-id"].value;
            return value == this._activeTab;
        } else return false;
    }
}