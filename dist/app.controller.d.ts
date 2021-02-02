import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    state: boolean;
    constructor(appService: AppService);
    connectionAccepted(): number;
    getOn(): boolean;
    getOff(): boolean;
    getState(): boolean;
}
