import { useNavigate, useParams } from 'react-router-dom';
import { addTask, getTaskById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editTask } from './../service/localstorage';

export const TaskForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        id: '',
        taskName: '',
        projectName: '',
        status: ''
    });

    useEffect(() => {
        if (id) {
            const task = getTaskById(id);
            setForm(task);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editTask(id, inputValues) : addTask({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    return (
        <div>

            <div className="d-flex my-5 justify-content-between">
                <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
                <h1 className="text-center">{id ? "Edit" : "Add new"} Task</h1>
                <div />
            </div>

            <div className="card border-primary p-5 m-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Id</label>
                        <input
                            name="id"
                            type="text"
                            value={inputValues.id}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Task Name</label>
                        <input
                            name="taskName"
                            type="text"
                            value={inputValues.taskName}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Project Name</label>
                        <input
                            type="text"
                            name="projectName"
                            value={inputValues.projectName}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid"
                        />
                    </div>


                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="inputValid">Status</label>
                        <select name="status" className="form-control" id="inputValid" onChange={handleInputChange}>
                            <option value=''>Select Status</option>
                            <option value="not started">Not started</option>
                            <option value="in progress">In progress</option>
                            <option value="overdue">Overdue</option>
                            <option value="done">Done</option>
                        </select>
                    </div>


                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Task</button>
                    </div>
                </form>
            </div>

            {
                showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success">
                            <strong>Well done!</strong> {id ? "edit" : "added a new"} Task.
                        </div>
                    </div>
                )
            }

        </div >
    )
}
