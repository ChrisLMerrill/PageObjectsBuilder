/**
 * Christopher L Merrill, Copyright 2019
 */

import {newSession} from './session';
import {newPages} from './pages';

export function newState(pages = newPages(), session = newSession())
    {
    return {pages:pages,session:session};
    }