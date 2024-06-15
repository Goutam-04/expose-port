#!/usr/bin/env node

import {program }from 'commander'
import getIPAddress from '../lib/ipconfig.js'

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
    
    // console.log(`the port no is ${port} ...`);
    }