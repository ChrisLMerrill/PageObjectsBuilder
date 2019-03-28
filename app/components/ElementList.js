import React from 'react';
import {connect} from 'react-redux';
import Element from './Element';

/**
 * Christopher L Merrill, Copyright 2019
 */

const mapStateToProps = state => {
    return { };
};

const ElementListImpl = (props) => (
    <ul>
        {props.elements.map(element => (
            <Element key={element.uid} element={element} />
        ))}
    </ul>
);
const ElementList = connect(mapStateToProps)(ElementListImpl);

export default ElementList;