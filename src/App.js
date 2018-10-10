import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Col, Alert } from 'reactstrap';
import './App.css';
import TaskList from './components/tasks/task-list';
import { getTasks } from "./services/task-service";
import Header from './components/common/header';

class App extends Component {
  state = {
    taskList: [],
    task: ''
  }
  addTask = () => {
    this.setState({
      taskList: [{ title: this.state.task, id: this.state.taskList.length + 1 }, ...this.state.taskList],
      showMessage: true
    });
    setTimeout(() => {
      this.setState({
        showMessage: false
      });
    }, 2000)
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  }
  render() {

    return (
      <React.Fragment>
        {this.state.showMessage && <Alert color="primary" >
          Task Added successfully.
        </Alert>}
        <Header />
        <Form className="form-padding" onSubmit={this.addTask}>
          <FormGroup row>
            <Col sm={6}><Input type="text" name="text" onChange={this.handleChange} value={this.state.task} placeholder="Enter Task" />
            </Col>
            <Button onClick={this.addTask}>Add </Button>
          </FormGroup>
        </Form>
        <TaskList task={this.state.taskList}></TaskList>
      </React.Fragment>
    );
  }
  componentDidMount() {
    getTasks().then(response => {
      this.setState({ taskList: response });
    })
  }
}

export default App;
