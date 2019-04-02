import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
import PageList from '../components/PageList';
import {SaveForm} from '../components/SaveInternal';

console.log('Pop-up script is running...');

export function addPage(payload) {
    return { type: "add-page", payload:payload};
}

console.log('connecting to the store...');
const store = new Store();
console.log('store is connected.');

const unsubscribe = store.subscribe(() => {
    unsubscribe();
    render(<Provider store={store}>
        <SaveForm/>
        <h1>Pages</h1><PageList/>
    </Provider>, document.getElementById("root"));
});

console.log('Popup script is done.');
