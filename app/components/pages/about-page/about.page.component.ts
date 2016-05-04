import { Component, OnInit } from 'angular2/core';
import { AboutService } from '../../../services/about.service';
import { About } from '../../../data-interfaces/about';
import { UtilitiesService } from '../../../services/utilities.service';
import { CommonTextComponent } from '../../common/common.text.component';

@Component({
    templateUrl: '../app/templates/about.page.component.html',
    directives: [CommonTextComponent]
})
export class AboutPageComponent implements OnInit {
    private _about:About;
    private _activeTab: string = "rights";
    
    constructor(private _aboutService:AboutService, private _utilities: UtilitiesService) { 
        this._about = this._utilities.getBlankAbout();
    }
    
    ngOnInit() {
        this._aboutService.getAboutText().then(function (about:About) {
            this._about = about;
        }.bind(this));
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