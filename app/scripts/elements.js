/**
 * Christopher L Merrill, Copyright 2019
 */
import {getCurrentPage, addElementToPage, replacePage} from './pages';


export function createElement(node)
    {
    let element = {};
    element.uid = Date.now();
    element.type = node.nodeName;
    element.id = node.id;
    return element;
    }

export function addElement(state, element)
    {
console.log('addElement: ' + element.type);
    let current_page = getCurrentPage(state);
    if (current_page !== null)
        {
        let new_page = addElementToPage(current_page, element);
        return replacePage(state, new_page);
        }
    console.log('cannot addElement - no page selected');
    return state;
    }