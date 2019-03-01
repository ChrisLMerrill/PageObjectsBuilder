import React from 'react';
import {connect} from "react-redux";

/**
 * Christopher L Merrill, Copyright 2019
 */

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

export default PageList;