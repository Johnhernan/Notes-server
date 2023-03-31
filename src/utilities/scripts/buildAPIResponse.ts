export default class ResponseModel {
    public success?: boolean;
    public error?: boolean;
    public message?: string;
    public value?: object;

    private get callStatus(): boolean {
        return this.callStatus;
    }

    constructor(callSuccess: boolean, value?: any, message?: string ) {
        this.callStatus ? this.success = true : this.error = true;
    }
}