import { Component, OnInit } from '@angular/core';

import { AboutService } from '../../../services/about.service';
import { About } from '../../../data-interfaces/about';
import { UtilitiesService } from '../../../services/utilities.service';
import { CommonTabsComponent } from '../../common/common.tabs.component';
import { CommonTextComponent } from '../../common/common.text.component';
import { CommentsComponent } from './comments.component';
import { CommonPhotoGalleryComponent } from '../../common/common.photo.gallery.component';
import { ITab } from '../../../data-interfaces/itab';

@Component({
    templateUrl: '../app/templates/about.page.component.html',
    directives: [CommonTextComponent, CommentsComponent, CommonPhotoGalleryComponent, CommonTabsComponent]
})
export class AboutPageComponent implements OnInit {
    private _about:About;
    private _tabs: ITab[];
    private _activeTab:string = "rights";
    
    constructor(private _aboutService:AboutService, private _utilities: UtilitiesService) { 
        this._about = this._utilities.getBlankAbout();
    }
    
    ngOnInit() {
        this._aboutService.getAboutText().then(function (about:About) {
            this._about = about;
            this._tabs = [{displayName: "Права и обязанности пациентов", internalName: "rights"},
                            {displayName: "Отзывы", internalName: "comments"},
                            {displayName: "Фотогаллерея", internalName: "photos"},
                            {displayName: "Лицензии", internalName: "license"}];
        }.bind(this));
    }
    
    onChangeActiveTabHandler(activeTab:string) {
        this._activeTab = activeTab;
    }
}