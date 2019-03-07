import React from 'react';
import {createStore} from "redux";
import {wrapStore} from 'webext-redux';

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
    if (port.name === 'user-action')
        {
        port.onMessage.addListener(function (message) {
            console.log("Received " + message.event_type + " on element: " + JSON.stringify(message.element));
        });
        }
    else if (port.name === 'context-menu')
        {
        console.log("Connected for context menu");
        context_menu_port = port;
        }
});

//
// Context menus
//

browser.contextMenus.create({
    id: "add-element",
    title: "Add element",
    contexts: ["page"]
});

browser.contextMenus.create({
    id: "add-page",
    title: "Add page",
    contexts: ["page"]
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

browser.browserAction.onClicked.addListener(function (tab) {
    const createData =
        {
        type: "popup",
        url: "pages/main.html",
        width: 600,
        height: 400
        };
    browser.windows.create(createData);
});


const pages = [];
pages[0] = {id: "page0", name: "Origin Page"};  // TODO remove temporary init data
pages[1] = {id: "page1", name: "First Page"};  // TODO remove temporary init data
const initialState = {pages: pages};

function rootReducer(state = initialState, action)
    {
    if (action.type === "add-page")
        {
        console.log("Adding page " + action.payload.name);
        const new_pages = state.pages.slice();
        // const index = new_pages.length;
        new_pages.push(action.payload);
        // new_pages.push({id:"page"+index, name:index+"th page"});
        return {pages: new_pages};
        }
    return state;
    }

const store = createStore(rootReducer);
wrapStore(store);