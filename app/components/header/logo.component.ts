import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AssetsService } from '../../services/assets.service'

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