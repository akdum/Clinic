import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AssetsService} from '../../services/assets.service'
import { MainPageComponent } from '../pages/main-page/main.page.component';

@Component({
    selector: 'logo-component',
    templateUrl: '../app/templates/logo.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LogoComponent {
    public logoAssetUrl: String;
    
    constructor(private _assetsService: AssetsService) {
        this.logoAssetUrl = _assetsService.getLogo();
    }
}