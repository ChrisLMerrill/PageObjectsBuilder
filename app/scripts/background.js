// 3rd party imports
import React from 'react';
import {createStore} from "redux";
import {wrapStore} from 'webext-redux';

// project imports
import {rootReducer} from './reducer';
import {setupContextMenus} from './context-menus';

// reports version changes for debugging aid.
browser.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion)
});

// browser.browserAction.setBadgeText({
//   text: 'Hello'
// });

console.log("PageObjectsBuilder started.");

setupContextMenus();

//
// Register a pop-up window for the extension button
//
browser.browserAction.onClicked.addListener(function () {
    const createData = {
        type: "popup",
        url: "pages/main.html",
        width: 800,
        height: 600
    };
    browser.windows.create(createData);
});

// setup the store and wrap it in the webext-redux wrapper
const store = createStore(rootReducer);
wrapStore(store);

function loadState() {
    let fetch_operation = browser.storage.local.get('state');
    fetch_operation.then((items) => {
        if (items.state)
            store.dispatch({type: 'load-state', payload: items.state});
    });
}
loadState();

var message_port = browser.runtime.onConnect.addListener(function(port) {
    if (port.name === 'messages')
        port.onMessage.addListener(function (message) {
        if (message.type === 'save-internal') {
            browser.storage.local.set({state:store.getState()});
        }
        else if (message.type === 'load-internal') {
            loadState();
        }
        else if (message.type === 'clear-state') {
            store.dispatch({type:'clear-state'});
        }
    })
});
