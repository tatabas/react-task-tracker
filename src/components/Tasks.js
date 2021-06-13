import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // this is the tasks variable that has setTasks
    // the default comes from the array in useState
    // state is immutable so you cannot push

    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task}
            onDelete = {onDelete} 
            onToggle = {onToggle} />
            ))}
        </>
    )
}

export default Tasks
