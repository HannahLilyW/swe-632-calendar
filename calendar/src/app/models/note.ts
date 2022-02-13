export class Note{
    createDate: Date;
    updateDate: Date;
    text: string;
    title: string;
    constructor(createDate: Date = null, updateDate: Date = null, text: string, title: string ){
        this.createDate = createDate || new Date();
        this.updateDate = updateDate || new Date();
        this.text = text;
        this.title = title;
    }
}
