#!/usr/bin/env node

import {program }from 'commander'
import getIPAddress from '../lib/ipconfig.js'
import linkshorten from '../lib/linkshorten.js';
import ngrok from '@ngrok/ngrok';
import dotenv from 'dotenv'
dotenv.config();

program
  .option('-w, --wifi [port]', 'Add port for wifi')
  .option('-g, --global [port]', 'Add port to expose to internet');

program.parse(process.argv);

const options = program.opts();

async function handleWifi(port){
  const address = `${getIPAddress()}:${port}`;
  //i just asked ai to make this a clickable link , i dont understand wht this is ,
    // most probaly i will replace this later as it is very late at night i dont have any much more patience now😅
  const clickableLink = `\u001b]8;;http://${address}\u0007${address}\u001b]8;;\u0007`;
  console.log(clickableLink);
}

// ---------------------t---------------------------------
async function handleGlobal(port) {
  try {
    console.log("it takes sometime to make the url, please wait....\n");
    const listener = await ngrok.forward({  authtoken_from_env: true ,addr: port });
    
    //output the url
    console.log(`Global link: ${listener.url()}\n`);
    console.log('use ctrl+c for closing the server');
    
    process.stdin.resume();

    // Handle Ctrl+C (SIGINT) to disconnect ngrok
    process.on('SIGINT', async () => {
      console.log('disconecting please wait.....\n');
      await ngrok.disconnect();
      console.log('DISCONNECTED ;_;, thank u for using');
      process.exit(0);
    });
  } catch (err) {
    console.error('Error WHile connectig , err:', err);
    process.exit(1);
  }
}

// --------------------just trying to shorten the link-----------------------------------------------------------

// linkshorten({address})

// console.log(`the port no is ${port} ...`);
// ***********************************************************************
if (options.wifi !== undefined) {
  if (options.wifi === true) {
    console.log('Add port to expose');
  } else {
    handleWifi(options.wifi);
  }
} else if (options.global !== undefined) {
  if (options.global === true) {
    console.log('Add port to expose globally');
  } else {
    handleGlobal(options.global);
  }
} else {
  console.log('Add any kind of wifi or global option');
}


//     npm version patch   # or `minor` or `major`
// npm publish