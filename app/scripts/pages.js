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
    const new_pages = state.pages.slice();
    new_pages.push(new_page);
    return newState(new_pages, newSessionWithSelectedPage(state.session, new_page.uid));
    }

export function createPage(title)
    {
    let page = {};
    page.title = title;
    page.uid = Date.now();
    page.elements = [];
    return page;
    }

export function addElementToPage(page, element)
    {
    let new_page = {};
    new_page.title = page.title;
    new_page.uid = page.uid;
    new_page.elements = page.elements;
    new_page.elements.push(element);
    return new_page;
    }

export function getCurrentPage(state)
    {
    let current_id = state.session.current_page;
    for (var i = 0; i < state.pages.length; i++)
        if (state.pages[i].uid === current_id)
            return state.pages[i];
    return null;
    }

export function replacePage(state, page)
    {
    let new_pages = state.pages.slice();
    for (var i = 0; i < state.pages.length; i++)
        if (new_pages[i].uid === page.uid)
            {
            new_pages[i] = page;
            return newState(new_pages, state.session);
            }
    console.log('Unable to replace the page - cannot find it.');
    return state;
    }