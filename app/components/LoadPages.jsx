/**
 * Christopher L Merrill, Copyright 2019
 */

import React, { Component } from "react";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    loadPage: page => dispatch({type: "add-page", payload:page})
  };
}

class LoadPagesDisconnected extends Component {
    constructor() {
        super();
        this.handleFileSelections = this.handleFileSelections.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
    }

    handleFileRead(event) {
        let file = JSON.parse(event.target.result);
        let pages = file.pages;
        if (pages.length)
            for (var i=0; i<pages.length; i++)
                this.props.loadPage(pages[i]);
    }

    handleFileSelections(files) {
        for (var i=0; i<files.length; i++) {
            let reader = new FileReader();
            reader.onloadend = this.handleFileRead;
            reader.readAsText(files[i]);
        }
    }

    render() {
        return (
            <span>
                <input className='inputfile' type='file' id='upload' accept='.json' multiple onChange={event => this.handleFileSelections(event.target.files)}/>
                <label htmlFor='upload' > Load from files... </label>
            </span>
    );
    }
}

export const LoadPages = connect(null, mapDispatchToProps)(LoadPagesDisconnected);