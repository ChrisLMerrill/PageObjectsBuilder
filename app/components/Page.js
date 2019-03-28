/**
 * Christopher L Merrill, Copyright 2019
 */

import React from 'react';
import {connect} from "react-redux";

import ElementList from './ElementList'

const mapStateToProps = state => {
    return { };
};

const PageImpl = (props) => (
    <div>
        {props.page.title}
        <ElementList elements={props.page.elements} />
    </div>
);

const Page = connect(mapStateToProps)(PageImpl);

export default Page;