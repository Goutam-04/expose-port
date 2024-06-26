#!/usr/bin/env node

import {program }from 'commander'
import getIPAddress from '../lib/ipconfig.js'
import linkshorten from '../lib/linkshorten.js';
import ngrok from '@ngrok/ngrok';
import dotenv from 'dotenv'
dotenv.config();

program
  .option('-w, --wifi [port]', 'Add port');

program.parse(process.argv);

const options = program.opts();
if (options.wifi === undefined) console.log('add any kind of wifi');
else if (options.wifi === true) console.log('add port to expose');


else {
    const port=options.wifi;
    const address=`${getIPAddress()}:${port}`
    //i just asked ai to make this a clickable link , i dont understand wht this is ,
    // most probaly i will replace this later as it is very late at night i dont have any much more patience now😅
    const clickableLink = `\u001b]8;;http://${address}\u0007${address}\u001b]8;;\u0007`;

    console.log(clickableLink);
    // ------------------------------------------------------
    (async function() {
      // Establish connectivity
      
      const listener = await ngrok.forward({  authtoken_from_env: true ,addr: port });
    
      // Output ngrok url to console
      console.log(`Global link: ${listener.url()}`);
    })();
// -------------------------------------------------------------------------------
    // linkshorten({address})
    
    // console.log(`the port no is ${port} ...`);
    }


//     npm version patch   # or `minor` or `major`
// npm publish