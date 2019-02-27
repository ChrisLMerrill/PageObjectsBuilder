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
function connected(port)
    {
    if (port.name === 'user-action')
    user_action_port = port;
    user_action_port.onMessage.addListener(function(message)
        {
        console.log("Received " + message.event_type + " on element: " + JSON.stringify(message.element));
        });
    }
browser.runtime.onConnect.addListener(connected);
