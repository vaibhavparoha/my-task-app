import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const TaskItem = (props) => {
    return (
        <React.Fragment>
            <Card className="form-padding">
                <CardTitle>{props.task.title}</CardTitle>
            </Card>
        </React.Fragment>

    );
};

export default TaskItem;