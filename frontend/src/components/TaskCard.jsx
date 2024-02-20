export function TaskCard({task}){
    return (
        <div>
            <h4>{task.name}</h4>
            <p>{task.email}</p>
            <hr/>
        </div>
    )
}