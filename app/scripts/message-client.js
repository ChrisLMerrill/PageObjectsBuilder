/**
 * Christopher L Merrill, Copyright 2019
 */

const port = browser.runtime.connect({name:'messages'});

export function sendMessage(type, payload)
    {
    port.postMessage({type:type, payload:payload});
    }