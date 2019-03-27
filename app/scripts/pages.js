/**
 * Christopher L Merrill, Copyright 2015
 */

export function createPages() {
const pages = [];
//pages[0] = {id: "page0", name: "Origin Page"};  // TODO remove temporary init data
//pages[1] = {id: "page1", name: "First Page"};  // TODO remove temporary init data
return pages;
}

function createPagesNew() {
    var pages = {};
    pages.list = [];
    pages.selected = -1;
    return pages;
}
