/**
 * Christopher L Merrill, Copyright 2019
 */

import {newSession, newSessionWithSelectedPage} from './session';
import {newPages} from './pages';

export function newState(pages = newPages(), session = newSession())
    {
    return {pages:pages,session:session};
    }

export function selectPage(state, page_id)
    {
    return {pages:state.pages, session:newSessionWithSelectedPage(state.session, page_id)};
    }