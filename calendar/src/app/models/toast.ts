export class Toast {
    type: ToastType;
    text: string;
    uuid: number;

    constructor(type: ToastType, text: string) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.type = type;
        this.text = text;
    }
}

export enum ToastType {
    success = 'SUCCESS',
    error = 'ERROR',
    info = 'INFO'
}
