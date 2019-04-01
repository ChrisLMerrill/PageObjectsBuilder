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
    const createData =
        {
        type: "popup",
        url: "pages/main.html",
        width: 600,
        height: 400
        };
    browser.windows.create(createData);
});

// setup the store and wrap it in the webext-redux wrapper
const store = createStore(rootReducer);
wrapStore(store);

var stored_stuff = null;
let stored = browser.storage.local.get('stuff');
stored.then((items) => {
    if (items.stuff === 'undefined')
        stored_stuff = 0;
    else
        stored_stuff = items.stuff;
    console.log('stored=' + stored_stuff);

    stored_stuff++;
    browser.storage.local.set({stuff:stored_stuff});
});

