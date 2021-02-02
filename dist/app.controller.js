"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.state = false;
    }
    connectionAccepted() {
        console.log("trying to connect to the server !");
        return 0;
    }
    getOn() {
        console.log("GetOn called !");
        console.log("this is a test !");
        this.state = true;
        const shell = require('node-powershell');
        let ps = new shell({
            executionPolicy: 'Bypass',
            noProfile: true
        });
        ps.addCommand('./openSteam.ps1');
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
            ps.dispose();
        });
        return this.state;
    }
    getOff() {
        console.log("GetOff called !");
        console.log("this is a test !");
        this.state = false;
        console.log("this.state = " + this.state);
        const shell = require('node-powershell');
        let ps = new shell({
            executionPolicy: 'Bypass',
            noProfile: true
        });
        ps.addCommand('./closeSteam.ps1');
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
            ps.dispose();
        });
        return this.state;
    }
    getState() {
        console.log("GetState called !");
        console.log("this is a test !");
        console.log("this.state = " + this.state);
        return this.state;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], AppController.prototype, "connectionAccepted", null);
__decorate([
    common_1.Get('/on'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], AppController.prototype, "getOn", null);
__decorate([
    common_1.Get('/off'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], AppController.prototype, "getOff", null);
__decorate([
    common_1.Get('/state'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], AppController.prototype, "getState", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map