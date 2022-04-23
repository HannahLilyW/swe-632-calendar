export class Note{
    uuid: number;
    createDate: Date;
    updateDate: Date;
    text: string;
    title: string;
    constructor(title: string, text: string, createDate: Date= null, updateDate: Date= null){
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.createDate = createDate || new Date();
        this.updateDate = updateDate || new Date();
        this.text = text;
        this.title = title;
    }
}
