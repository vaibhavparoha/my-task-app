import React from 'react';
import TaskItem from "./task-items";
const TaskList = (props) => {
    return (
        <React.Fragment>
            <div className="form-padding" >
                {props.task.map(data => {
                    return <TaskItem key={data.id} task={data} />
                })}
            </div>
        </React.Fragment>
    );
};

export default TaskList;