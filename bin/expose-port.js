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
    console.log(address);
    
    // console.log(`the port no is ${port} ...`);
    }