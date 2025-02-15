import { useSelector } from "react-redux"
import { getTasksSelector } from "../../providers/StoreProvider/selectors/getTasksSelector"
import { ListTasks } from "../../components"

function Tasks() {
    const tasks = useSelector(getTasksSelector)

    return(
        <div>
            {tasks && (
                <ListTasks arr={tasks} />
            )}
        </div>
    )
}

export default Tasks