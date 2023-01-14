export const getListTasks = () => {
  if (!localStorage["tasks"]) {
    localStorage["tasks"] = "[]";
  }

  let tasks = localStorage["tasks"];
  tasks = JSON.parse(tasks);
  return tasks;
};

export const addTask = (task) => {
  const tasks = getListTasks();
  tasks.push(task);
  localStorage["tasks"] = JSON.stringify(tasks);
};

export const removeTask = (id) => {
  let tasks = getListTasks();
  tasks = tasks.filter((task) => task.id !== id);
  localStorage["tasks"] = JSON.stringify(tasks);
};

export const getTaskById = (id) => {
  const tasks = getListTasks();
  const task = tasks.find((task) => task.id === id);
  return task;
};

export const editTask = (id, newTask) => {
  let tasks = getListTasks();
  tasks = tasks.filter((task) => task.id !== id);
  tasks.push(newTask);
  localStorage["tasks"] = JSON.stringify(tasks);
};
