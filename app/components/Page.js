/**
 * Christopher L Merrill, Copyright 2019
 */

import React from 'react';
import {connect} from "react-redux";

import ElementList from './ElementList'

const mapStateToProps = state => {
    return { selected_page: state.session.current_page };
};

const PageImpl = (props) => {
    let selected = props.selected_page === props.page.uid;
    return (
        <div>
            <span className={selected ? "current" : ""}>{props.page.title}</span>
            { selected ? <ElementList elements={props.page.elements} /> : "" }
        </div>
    );
};

const Page = connect(mapStateToProps)(PageImpl);

export default Page;