console.log("PageObjectsBuilder is running in the page");

// open port for sending user-action messages
var user_actions_port = browser.runtime.connect({name:"user-action"});

// report click events
document.addEventListener('click', function (event)
    {
    var message = 'clicked: ' + event.target.nodeName;
    console.log(message);
    user_actions_port.postMessage({event_type:"click", description:message});
    });