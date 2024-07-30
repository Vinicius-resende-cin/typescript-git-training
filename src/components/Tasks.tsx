import { useState, useEffect } from 'react';
import api from '../services/api';

export default function Tasks() {
  // Atualize o tipo para incluir _id
  const [tasks, setTasks] = useState<{ _id: string; index: number; task: string }[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    async function getAllTasks() {
      const response = await api.get('/taskList');
      setTasks(response.data);
    }

    getAllTasks();
  }, []);

  const addTask = async () => {
    if (newTask.trim() !== '') {
      const newIndex = tasks.length > 0 ? tasks[tasks.length - 1].index + 1 : 0;
      const newTaskObject = { _id: '', index: newIndex, task: newTask }; 

      setNewTask('');

      const response = await api.post('/taskList', {
        task: newTaskObject.task,
        index: newTaskObject.index,
      });

      newTaskObject._id = response.data._id;
      setTasks([...tasks, newTaskObject]);
    }
  };

  const removeTask = async (id: string) => {
    const deletedTask = await api.delete(`/taskList/${id}`);

    if (deletedTask) {
      setTasks(tasks.filter(task => task._id !== id));
    }
  };

  return (
    <>
      <h1>Tasks</h1>

      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add a new Task' />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(data => (
          <li key={data._id}>
            {data.task}
            <button onClick={() => removeTask(data._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
