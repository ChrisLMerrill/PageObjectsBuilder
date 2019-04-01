import {addElement} from "./elements";
import {newState, selectPage} from "./state";
import {addPage} from "./pages";

/**
 * Christopher L Merrill, Copyright 2019
 */

// the root reducer dispatches an action to the correct reducer function
export function rootReducer(state = newState(), action) {
    if (action.type === "add-page")
        return addPage(state, action.payload);
    if (action.type === "add-element")
        return addElement(state, action.payload);
    if (action.type === "select-page")
        return selectPage(state, action.payload);
    if (action.type === "load-state")
        return action.payload;
    if (action.type === "clear-state")
        return newState();
    console.log("Unhandled action (" + action.type + ") received: " + JSON.stringify(action.payload));
    return state;
}