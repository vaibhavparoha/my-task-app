import React from 'react';
import TaskItem from "./task-items";
const TaskList = (props) => {
    return (
        <React.Fragment>
            <div className="form-padding" >
                {props.tasks && props.tasks.map(data => {
                    return <TaskItem key={data.id} task={data} deleteTask={props.deleteTask} />
                })}
            </div>
        </React.Fragment>
    );
};

export default TaskList;