/**
 * Christopher L Merrill, Copyright 2019
 */

import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return { };
};

const ElementImpl = (props) => (
    <li>
        {props.element.type}
    </li>
);

const Element = connect(mapStateToProps)(ElementImpl);

export default Element;