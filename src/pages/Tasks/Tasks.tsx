import { useSelector } from "react-redux"
import { getTasksSelector } from "../../providers/StoreProvider/selectors/getTasksSelector"
import { ListTasks } from "../../components"
import { LoaderContent } from "../../ui/Loader/LoaderContent/LoaderContent"

function Tasks() {
    const tasks = useSelector(getTasksSelector)

    return(
        <div>
            {tasks ? (
                <ListTasks arr={tasks} />
            ) : (
                 <LoaderContent isBg />
            )}
        </div>
    )
}

export default Tasks