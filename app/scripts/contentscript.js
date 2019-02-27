console.log("PageObjectsBuilder is running in the page");

// open port for sending user-action messages
var user_actions_port = browser.runtime.connect({name:"user-action"});

// report click events
document.addEventListener('click', function (event)
    {
    var element = event.target;
    console.log('clicked: ' + element.nodeName);
    var message = {};
    message.event_type = "click";
    message.element = {};
    message.element.type = element.nodeName;
    message.element.id = element.id;
    user_actions_port.postMessage(message);
    });