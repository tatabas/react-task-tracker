import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
import { FaCommentsDollar } from 'react-icons/fa'

const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dentist Appointment',
        day: 'Nov 22nd at 11:30am',
        reminder: true
    },
    {
        id: 2,
        text: 'Grocery Shopping',
        day: 'Nov 25th at 09:00am',
        reminder: true
    },
    {
        id: 3,
        text: 'Mow Lawn',
        day: 'Nov 28th at 10:30am',
        reminder: false
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title = 'Task Tracker' 
      onAdd = {() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} />)
       : (
         'No Tasks To Show'
       )}
    </div>
  );
}

export default App;
