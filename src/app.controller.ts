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
    console.log("this.state = " + this.state);

    const {exec} = require("child_process")
    exec('Home').unref()
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
