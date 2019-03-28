import React from 'react';
import {connect} from 'react-redux';
import Page from './Page';

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
                <Page page={page} />
            </li>
        ))}
    </ul>
);
const PageList = connect(mapStateToProps)(PageListAbs);

export default PageList;