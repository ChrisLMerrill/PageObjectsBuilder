import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

console.log('Main UI window displayed.');

const pages = [];
pages[0] = {id:"page0", name:"Origin Page"};
pages[1] = {id:"page1", name:"First Page"};
const initialState = {pages: pages};

function rootReducer(state = initialState, action)
    {
    if (action.type === "add-page")
        {
        const new_pages = Array.from(state.pages);
        const index = new_pages.length;
        new_pages.push({id:"page"+index, name:index+"th page"});
        return {pages:new_pages};
        }
    return state;
    }

const store = createStore(rootReducer);

class Hello extends React.Component {
    render() {
        const page_elements = [];
        for (const [index, page] of pages.entries()) {
            page_elements.push(<li key={index}>{page.name}</li>)
        }
        return <ul>{page_elements}</ul>
    }
}

const mapStateToProps = state => {
    return { pages: state.pages };
};

const PageListAbs = ({pages}) => (
    <ul>
        {pages.map(page => (
            <li key={page.id}>
                {page.name}
            </li>
        ))}
    </ul>
);
const PageList = connect(mapStateToProps)(PageListAbs);

render(<Provider store={store}><PageList /></Provider>, document.getElementById("root"));

