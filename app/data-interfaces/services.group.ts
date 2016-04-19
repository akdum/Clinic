import { IText } from './itext';

export class ServicesGroup {
    constructor(public title:string,
                public body: string,
                public imageUrl: string,
                public url: string,
                public text: IText[]) {}
}