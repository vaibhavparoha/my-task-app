import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, Input } from 'reactstrap';

class TaskAdd extends Component {
    state = {
        taskName: ''
    }
    handleChanges = (event) => {
        this.setState({
            taskName: event.target.value
        })
    }
    updateState = () => {
        this.props.addTask(this.state.taskName);
        this.setState({
            taskName: ''
        })
    }
    render() {
        return (
            <React.Fragment>
                <Form className="form-padding" >
                    <FormGroup row>
                        <Col sm={6}><Input type="text" name="text" value={this.state.taskName} onChange={this.handleChanges} placeholder="Enter Task" />
                        </Col>
                        <Button onClick={this.updateState}  >Add </Button>
                    </FormGroup>
                </Form>
            </React.Fragment>

        );
    }
}

export default TaskAdd;