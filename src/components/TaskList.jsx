import { TaskItem } from './TaskItem';
import { useEffect, useState } from 'react';
import { getListTasks } from './../service/localstorage';

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getListTasks());
    }, []);

    return (
        <div>
            <h1 className="my-5 text-center">Manage Tasks</h1>

            {
                tasks.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Task Name</th>
                                    <th scope="col">Project Name</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map(task => <TaskItem task={task} key={task.id} setTasks={setTasks} />)
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className="text-center">No tasks</h3>
                )
            }

        </div>
    )
}
