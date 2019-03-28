/**
 * Christopher L Merrill, Copyright 2015
 */
import {newState} from "./state";
import {newSessionWithSelectedPage} from "./session";

export function newPages()
    {
    return [];
    }

export function addPage(state, new_page)
    {
    new_page.id = 'page' + state.pages.length;
    const new_pages = state.pages.slice();
    new_pages.push(new_page);
    return newState(new_pages, newSessionWithSelectedPage(state.session, new_page.id));
    }