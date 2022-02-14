export class Note{
    createDate: Date;
    updateDate: Date;
    text: string;
    title: string;
    constructor(title: string, text: string, createDate: Date=null, updateDate: Date=null){
        this.createDate = createDate || new Date();
        this.updateDate = updateDate || new Date();
        this.text = text;
        this.title = title;
    }
}
