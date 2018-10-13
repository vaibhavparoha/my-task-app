import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTasks, deleteTask, addTask } from "../actions";
import Header from "./../components/common/header";
import TaskList from "./../components/tasks/task-list";
import TaskAdd from "./../components/tasks/task-add";
import { bindActionCreators } from "redux";

class TaskContainer extends Component {
    componentWillMount() {
        this.props.getTasks();
    }
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <Header />
                <TaskAdd addTask={this.props.addTask} />
                <TaskList tasks={tasks.tasks} deleteTask={this.props.deleteTask} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getTasks,
        deleteTask,
        addTask
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);