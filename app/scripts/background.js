// reports version changes for debugging aid.
browser.runtime.onInstalled.addListener(function(details)
    {
    console.log('previousVersion', details.previousVersion)
    });

// browser.browserAction.setBadgeText({
//   text: 'Hello'
// });

console.log("PageObjectsBuilder started.");

//
// Setup port to listen for user-action events
//
var user_action_port;
browser.runtime.onConnect.addListener(function connected(port)
    {
    if (port.name === 'user-action')
    user_action_port = port;
    user_action_port.onMessage.addListener(function(message)
        {
        console.log("Received " + message.event_type + " on element: " + JSON.stringify(message.element));
        });
    }
);

//
// Setup port for sending context menu events
//
var context_menu_port;
browser.runtime.onConnect.addListener(function(port)
    {
    context_menu_port = port;
    });
// TODO reset the port when the port disconnects?

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
// Send context-menu action to the page script
//
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
      case "add-element":
      case "add-page":
        context_menu_port.postMessage({action: info.menuItemId});
      break;
  }
});