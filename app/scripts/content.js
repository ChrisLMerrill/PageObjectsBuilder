import {Store} from 'webext-redux';
const store = new Store();

import {createElement} from './elements';


console.log("PageObjectsBuilder content script is running in the page");

// open port for sending user-action messages
var user_actions_port = browser.runtime.connect({name:"user-action"});

// report click events
document.addEventListener('click', function (event)
{
    if (event.button === 0)
        {
        var element = event.target;
        console.log('clicked: ' + element.nodeName);
        var message = {};
        message.event_type = "click";
        message.element = {};
        message.element.type = element.nodeName;
        message.element.id = element.id;
        user_actions_port.postMessage(message);
        }
    else if (event.button === 2)
        selected_node = event.target;
});

var selected_node = null;

// on context menu activation event, listen for context menu action from the extension
document.addEventListener('contextmenu', function(event)
    {
    var context_port = browser.runtime.connect({"name":"context-menu"});  // this registers the port with the extension long enough to recieve the context-menu event
    console.log('contextmenu event on element ' + event.target.nodeName);
    context_port.onMessage.addListener(function(message)
        {
        console.log('received menu action: ' + message.action);
        if (message.action === 'add-page')
            {
            console.log("about to dispatch the add-page action...");
            store.dispatch({type: "add-page", payload:{name:document.title}});
            console.log("add-page action has been dispatched.");
            }
        if (message.action === 'add-element')
            {
            console.log("dispatch the add-element action");
            store.dispatch({type: "add-element", payload:createElement(selected_node)});
            console.log("add-element action has been dispatched.");
            }
        });
    });