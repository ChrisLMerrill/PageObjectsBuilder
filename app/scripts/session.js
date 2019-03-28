/**
 * Christopher L Merrill, Copyright 2019
 */

export function newSession()
    {
    return {current_page: null};
    }

export function newSessionWithSelectedPage(session, page_id)
    {
    return {current_page: page_id};
    }