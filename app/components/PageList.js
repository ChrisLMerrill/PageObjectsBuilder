import React from 'react';
import {connect} from "react-redux";

/**
 * Christopher L Merrill, Copyright 2019
 */

const mapStateToProps = state => {
    return { pages: state.pages, selected: state.session.current_page };
};

const PageListAbs = ({pages,selected}) => (
    <ul>
        {pages.map(page => (
            <li key={page.uid}>
                {page.title}
            </li>
        ))}
    </ul>
);
const PageList = connect(mapStateToProps)(PageListAbs);

export default PageList;