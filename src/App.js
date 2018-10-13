import React, { Component } from 'react';
import './App.css';
import TaskHome from "./components/tasks/task-home";
class App extends Component {
  render() {
    return (
      <div>
        <TaskHome />
      </div>
    );
  }
}
export default App;