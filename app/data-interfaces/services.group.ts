import { IText } from './itext';

export class ServicesGroup {
    constructor(public title:string,
                public body: string,
                public imageBase64: string,
                public url: string,
                public text: IText[]) {}
}