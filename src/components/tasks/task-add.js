import React, { Component } from 'react';
import { StyledButton, StyledInput } from "./../styled-components";

class TaskAdd extends Component {
    state = {
        taskName: ''
    }
    handleChanges = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
    updateState = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ''
        })
    }
    render() {
        return (
            <React.Fragment>
                <StyledInput name="text" value={this.state.taskName} onChange={this.handleChanges} placeholder="Enter Task"></StyledInput>
                <StyledButton onClick={this.updateState} color="primary" >Add</StyledButton>
            </React.Fragment>

        );
    }
}

export default TaskAdd;