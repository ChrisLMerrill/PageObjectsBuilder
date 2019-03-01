import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
import PageList from '../components/PageList';
import AddPageForm from '../components/AddPageForm';

console.log('Main UI window displayed.');

export function addPage(payload) {
    return { type: "add-page", payload};
}

const store = new Store();

const unsubscribe = store.subscribe(() => {
    unsubscribe();
    render(<Provider store={store}><PageList/><AddPageForm/></Provider>, document.getElementById("root"));
});
