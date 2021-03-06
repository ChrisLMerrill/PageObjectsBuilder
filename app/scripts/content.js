import {Store} from 'webext-redux';
const store = new Store();

import {createPage} from './pages';
import {createElement} from './elements';


console.log("PageObjectsBuilder content script is running in the page");

var selected_node = null;

// on context menu activation event, listen for context menu action from the extension
document.addEventListener('contextmenu', function(event)
    {
    var context_port = browser.runtime.connect({"name":"context-menu"});  // this registers the port with the extension long enough to recieve the context-menu event
    console.log('contextmenu event on element ' + event.target.nodeName);
    selected_node = event.target;
    context_port.onMessage.addListener(function(message)
        {
        console.log('received menu action: ' + message.action);
        if (message.action === 'add-page')
            {
            console.log("about to dispatch the add-page action...");
            store.dispatch({type: "add-page", payload:createPage(document.title)});
            // store.dispatch({type: "add-page", payload:{name:document.title}});
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