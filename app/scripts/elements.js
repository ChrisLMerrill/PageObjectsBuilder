/**
 * Christopher L Merrill, Copyright 2019
 */

export function createElement(node)
    {
    let element = {};
    element.type = node.nodeName;
    element.id = node.id;
    return element;
    }

export function addElement(state, element)
    {
console.log('addElement: ' + element.type);
    }