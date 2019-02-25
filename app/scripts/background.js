browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
});

// browser.browserAction.setBadgeText({
//   text: 'Hello'
// });

console.log("POB2 started!");

function handleMessage(request, sender, sendResponse)
    {
    console.log("Received event: " + request.message);
    }

browser.runtime.onMessage.addListener(handleMessage);