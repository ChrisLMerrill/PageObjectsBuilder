/**
 * Christopher L Merrill, Copyright 2019
 */

import React from 'react';
import {connect} from "react-redux";

import ElementList from './ElementList'


function createSelectPageAction(page_id)
    {
    return { type: "select-page", payload:page_id};
    }

const mapStateToProps = state => {
    return { selected_page: state.session.current_page };
};

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
}

const PageImpl = (props) => {
    let selected = props.selected_page === props.page.uid;
    return (
        <div>
            <span onClick={() => props.dispatch(createSelectPageAction(props.page.uid))} className={selected ? "current" : "clickable"}>{props.page.title}</span>
            { selected ? <ElementList elements={props.page.elements} /> : "" }
        </div>
    );
};

const Page = connect(mapStateToProps, mapDispatchToProps)(PageImpl);

export default Page;