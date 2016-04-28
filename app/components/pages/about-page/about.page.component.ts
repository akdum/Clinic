import { Component, OnInit } from 'angular2/core';
import { CommonTextComponent } from '../../common/common.text.component';
import { AboutService } from '../../../services/about.service';
import { IText } from '../../../data-interfaces/IText';

@Component({
    templateUrl: '../app/templates/about.page.component.html',
    directives: [CommonTextComponent]
})
export class AboutPageComponent implements OnInit {
    private _about:IText[] = [];
    
    constructor(private _aboutService:AboutService) { }
    
    ngOnInit() {
        this._aboutService.getAboutText().then(function (data:IText[]) {
            this._about = data;
        }.bind(this));
    }
}