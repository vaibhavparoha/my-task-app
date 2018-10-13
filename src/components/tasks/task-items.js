import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';

const TaskItem = (props) => {
    const { title, id } = props.task;
    return (
        <React.Fragment>
            <Card className="form-padding">
                <CardTitle>{title}</CardTitle>
                <div>
                    <Button color="danger" onClick={() => props.deleteTask(id)}>Delete</Button>
                </div>
            </Card>
        </React.Fragment>

    );
};

export default TaskItem;