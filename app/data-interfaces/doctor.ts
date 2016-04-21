import { IText } from './IText';

export class Doctor {
    constructor(public name:string, public therapy:string, public url:string, public photoName:string, public text:IText[]) {}
}