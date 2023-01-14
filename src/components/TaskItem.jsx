import React from 'react'
import { removeTask } from '../service/localstorage';
import { getListTasks } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const TaskItem = ({ task, setTasks }) => {
    const { id, taskName, projectName, status } = task;
    const navigate = useNavigate();

    const deleteTask = () => {
        removeTask(id);
        setTasks(getListTasks());
    }

    return (
        <tr className="table-primasry">
            <th>{id}</th>
            <th>{taskName}</th>
            <td>{projectName}</td>
            <td>{status}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-task/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteTask()}>Delete</span>
                </div>
            </td>
        </tr>
    )
}
