import { IText } from './IText';
import { IPrice } from './iprice';

export class Service {
    constructor(public title: string, 
                public body: string, 
                public iconUrl: string, 
                public group: string,
                public showOnMainPage: boolean, 
                public isPopular: boolean,
                public url: string,
                public text: IText[],
                public prices: IPrice[],
                public doctorUrls: string[]) {}
}