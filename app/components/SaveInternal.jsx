/**
 * Christopher L Merrill, Copyright 2019
 */

import React, { Component } from "react";

import {sendMessage} from '../scripts/message-client';

export class SaveInternalForm extends Component {
    constructor() {
        super();
        this.saveInternal = this.saveInternal.bind(this);
        this.loadInternal= this.loadInternal.bind(this);
        this.clear= this.clear.bind(this);
    }

    saveInternal(event) {
        event.preventDefault();
        sendMessage('save-internal');
    }

    loadInternal(event) {
        event.preventDefault();
        sendMessage('load-internal');
    }

    clear(event) {
        event.preventDefault();
        sendMessage('clear-state');
    }

    render() {
        return (
            <form>
                <div>
                    <button type="submit" onClick={this.saveInternal}>Save in browser storage</button>
                    <button type="submit" onClick={this.loadInternal}>Load from browser storage</button>
                    <button type="submit" onClick={this.clear}>Clear</button>
                </div>
            </form>
        );
    }
}