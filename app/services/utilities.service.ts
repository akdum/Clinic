import { Injectable } from 'angular2/core';

@Injectable()
export class UtilitiesService {
    getStringFromField(field:any) {
        return field ? field.S : "";
    }
}