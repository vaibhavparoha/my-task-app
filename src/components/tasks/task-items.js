import React from 'react';
import { StyledCard, StyledButton, StyledTitle } from "./../styled-components";
const TaskItem = (props) => {
    const { title, id } = props.task;
    return (
        <React.Fragment>
            <StyledCard>
                <StyledButton color="danger" onClick={() => props.deleteTask(id)}>X</StyledButton>
                <StyledTitle>{title}</StyledTitle>
            </StyledCard>
        </React.Fragment>

    );
};

export default TaskItem;