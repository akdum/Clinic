interface IText {
    heading: string,
    value: string
}

export class ServicesGroup {
    constructor(public title:string,
                public body: string,
                public imageBase64: string,
                public url: string,
                public text: IText[]) {}
}