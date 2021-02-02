import { Injectable } from '@nestjs/common';

@Injectable()
export class FinalFantasyService 
{


    openFinalFantasy()
    {
        const shell = require('node-powershell');
        let ps = new shell({
            executionPolicy: 'Bypass',
            noProfile: true
        });
        
        ps.addCommand('./script/openFinalFantasy.ps1')
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
            ps.dispose();
        });
    }

    closeFinalFantasy()
    {
        const shell = require('node-powershell');
        let ps = new shell({
            executionPolicy: 'Bypass',
            noProfile: true
        });
        
        ps.addCommand('./script/closeFinalFantasy.ps1')
        ps.invoke().then(output => {
            console.log(output);
        }).catch(err => {
            console.log(err);
            ps.dispose();
        });
    }
}
