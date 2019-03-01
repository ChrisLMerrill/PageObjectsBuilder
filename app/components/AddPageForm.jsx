import React, { Component } from "react";
import { connect } from "react-redux";
import { addPage } from "../scripts/main";

function mapDispatchToProps(dispatch) {
  return {
    addPage: page => dispatch(addPage(page))
  };
}

class AddPageFormDisconnected extends Component {
    constructor() {
        super();
        this.state = {name: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const page = {};
        page.name = this.state.name;
        page.id = "page" + Math.floor(Math.random() * Math.floor(99999));
        this.props.addPage(page);
        this.setState({name:""});
    }

    render() {
        const { name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={this.handleChange}/>
                </div>
                <button type="submit" onSubmit={this.handleSubmit}>
                    Save
                </button>
            </form>
        );
    }
}

const AddPageForm = connect(null, mapDispatchToProps)(AddPageFormDisconnected);
export default AddPageForm;