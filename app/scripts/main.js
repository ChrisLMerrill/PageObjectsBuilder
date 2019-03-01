import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import PageList from '../components/PageList';
import AddPageForm from '../components/AddPageForm';

console.log('Main UI window displayed.');

const pages = [];
pages[0] = {id:"page0", name:"Origin Page"};
pages[1] = {id:"page1", name:"First Page"};
const initialState = {pages: pages};

export function addPage(payload) {
    return { type: "add-page", payload};
}

function rootReducer(state = initialState, action)
    {
    if (action.type === "add-page")
        {
        const new_pages = state.pages.slice();
        // const index = new_pages.length;
        new_pages.push(action.payload);
        // new_pages.push({id:"page"+index, name:index+"th page"});
        return {pages:new_pages};
        }
    return state;
    }

const store = createStore(rootReducer);

render(<Provider store={store}><PageList /><AddPageForm /></Provider>, document.getElementById("root"));

