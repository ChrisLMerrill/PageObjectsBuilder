// 3rd party imports
import React from 'react';
import {createStore} from "redux";
import {wrapStore} from 'webext-redux';

// project imports
import {createPages, addPage} from './pages';
import {addElement} from './elements';
import {newState} from './state';

// reports version changes for debugging aid.
browser.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion)
});

// browser.browserAction.setBadgeText({
//   text: 'Hello'
// });

console.log("PageObjectsBuilder started.");

//
// Setup port to listen for user-action and context-menu events
//
var context_menu_port = null;
browser.runtime.onConnect.addListener(function connected(port) {
    if (port.name === 'context-menu')
        {
        console.log("Connected for context menu");
        context_menu_port = port;
        }
});

//
// Setup the context menu items
//

browser.contextMenus.create({
    id: "add-element",
    title: "Add element",
    contexts: ["all"]
});

browser.contextMenus.create({
    id: "add-page",
    title: "Add page",
    contexts: ["all"]
});

//
// Send context-menu action to the page script that most recently opened the context_menu_port.
//
browser.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId)
    {
        case "add-element":
        case "add-page":
            context_menu_port.postMessage({action: info.menuItemId});
            break;
    }
});

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

// the root reducer dispatches an action to the correct reducer function
function rootReducer(state = newState(), action)
    {
    if (action.type === "add-page")
        return addPage(state, action.payload);
    if (action.type === "add-element")
        return addElement(state, action.payload);
    return state;
    }

// setup the store and wrap it in the webext-redux wrapper
const store = createStore(rootReducer);
wrapStore(store);