import { AppService } from './app.service';
import { FinalFantasyService } from './final-fantasy/final-fantasy.service';
export declare class AppController {
    private readonly appService;
    private finalFantasyService;
    state: boolean;
    finalFantasyState: boolean;
    constructor(appService: AppService, finalFantasyService: FinalFantasyService);
    connectionAccepted(): number;
    getOn(): boolean;
    getOff(): boolean;
    getState(): boolean;
    openFinalFantasy(): boolean;
    closeFinalFantasy(): boolean;
    stateFinalFantasy(): boolean;
}
