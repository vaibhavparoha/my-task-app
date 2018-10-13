import axios from "axios";
const URL = 'https://jsonplaceholder.typicode.com';

export function getTasks() {
    const request = axios.get(`${URL}/todos`).then((response) => response.data);
    return {
        type: 'GET_TASKS_LIST',
        payload: request
    }
}

export function addTask(taskName) {
    return {
        type: 'ADD_TASK',
        payload: taskName
    }
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export function toggleMessage({ type, text, visible }) {
    return {
        type: 'TOGGLE_MESSAGE',
        payload: { type, text, visible }
    }
}
