/**
 * Christopher L Merrill, Copyright 2015
 */

export function createPages()
    {
    const pages = [];
    //pages[0] = {id: "page0", name: "Origin Page"};  // TODO remove temporary init data
    //pages[1] = {id: "page1", name: "First Page"};  // TODO remove temporary init data
    return pages;
    }

export function addPage(state, new_page)
    {
    new_page.id = 'page' + state.pages.length;
console.log("Adding page " + new_page.name);
    const new_pages = state.pages.slice();
    new_pages.push(new_page);
    return {pages: new_pages};
    }