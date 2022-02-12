export class Note{
    createDate: Date;
    updateDate: Date;
    text: string;
    title: string;
    constructor(createDate: Date, updateDate: Date, text: string, title: string ){
        this.createDate =createDate;
        this.updateDate = updateDate;
        this.text = text;
        this.title = title;
    }
}