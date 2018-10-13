const initialState = {
    tasks: [],
    message: {
        text: '',
        type: '',
        visible: false
    }
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TASKS_LIST':
            return { ...state, tasks: action.payload };
        case 'DELETE_TASK': {
            const { tasks } = { ...state }
            return {
                ...state, tasks: tasks.filter((task) => {
                    return task.id !== action.payload
                })
            };
        }
        case 'ADD_TASK': {
            const { tasks } = { ...state }
            return { ...state, tasks: [{ id: tasks.length + 1, title: action.payload }, ...tasks] }
        }
        default:
            return state
    }
};

export default tasks;
