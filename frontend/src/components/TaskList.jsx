import { useEffect, useState } from "react"
import { getAllTasks } from "../api/task.api"
import { TaskCard } from "./TaskCard"

export function TaskList() {
    
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log('Pagina cargada')
        async function loadTasks() {
            const res = await getAllTasks()
            console.log(res.data)
            setTasks(res.data)
        }
        loadTasks()
    }, [])
    return (
        <div>
        {tasks.map(task => (
            <TaskCard key={task._id} task={task} />
        ))}
        <div>
            Task List
        </div>
        </div>
    )
}