/**
 * Christopher L Merrill, Copyright 2019
 */

var context_menu_port = null;

export function setupContextMenus()
    {
    //
    // Setup port to listen for context-menu events
    //
    browser.runtime.onConnect.addListener(function connected(port)
        {
        if (port.name === 'context-menu')
            {
            console.log("Connected for context menu");
            context_menu_port = port;
            }
        });

    //
    // Setup the context menu items
    //

    browser.contextMenus.create(
        {
        id: "add-element",
        title: "Add element",
        contexts: ["all"]
        });

    browser.contextMenus.create(
        {
        id: "add-page",
        title: "Add page",
        contexts: ["all"]
        });

    //
    // Send context-menu action to the page script that most recently opened the context_menu_port.
    //
    browser.contextMenus.onClicked.addListener(function (info, tab)
        {
        switch (info.menuItemId)
            {
            case "add-element":
            case "add-page":
                context_menu_port.postMessage({action: info.menuItemId});
                break;
            }
        });

    }