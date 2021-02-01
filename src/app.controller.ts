import { Controller, Get } from '@nestjs/common';
import { response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController 
{
  state: boolean = false;

  constructor(private readonly appService: AppService) {}

  @Get()
  connectionAccepted(): number
  {
    console.log("trying to connect to the server !");
    
    return 0;
  }

  @Get('/on')
  getOn(): boolean 
  {
    console.log("GetOn called !");
    console.log("this is a test !")
    this.state = true;

    const shell = require('node-powershell');
let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

ps.addCommand('./openSteam.ps1')
ps.invoke().then(output => {
  console.log(output);
}).catch(err => {
  console.log(err);
  ps.dispose();
});
    return this.state;
  }

  @Get('/off')
  getOff(): boolean
  {
    console.log("GetOff called !");
    console.log("this is a test !")
    this.state = false;
    console.log("this.state = " + this.state);
    return this.state;
  }

  @Get('/state')
  getState(): boolean
  {
    console.log("GetState called !");
    console.log("this is a test !")
    console.log("this.state = " + this.state);
    return this.state;
  }  
}
