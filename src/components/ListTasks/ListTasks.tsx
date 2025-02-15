import { useEffect, useState } from "react";
import { ItemTasks, TitlePage } from "..";
import { TasksType, TasksTypeKey } from "../../types/TasksType";
import style from "./ListTasks.module.scss";
import { queryClient } from "../../api/queryClient";
import { SlidingPanel } from "../../ui/SlidingPanel";

interface ListTasksProps {
  arr: TasksType;
}

const api_url = import.meta.env.VITE_API_BASE_URL;

export function ListTasks({ arr }: ListTasksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [infoTask, setInfoTask] = useState<TasksTypeKey>();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  }, []);

  const handleOpen = (task: TasksTypeKey) => {
    setIsOpen(true);
    setInfoTask(task);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log(infoTask)
  }, [infoTask])

  return (
    <>
      <div style={{ marginBottom: "8px" }} className={style.listBox}>
        <TitlePage title={arr.data_1.topic} />
        <ul className={style.list}>
          {arr.data_1.tasks.map((item) => (
            <li className={style.item} key={item.task.id}>
              <ItemTasks
                task={item}
                reward={item.task.reward}
                name={item.task.name}
                img={`${api_url}${item.task.image.image_url}`}
                onOpen={handleOpen}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.listBox}>
        <TitlePage title={arr.data_2.topic} />
        <ul className={style.list}>
          {arr.data_2.tasks.map((item) => (
            <li className={style.item} key={item.task.id}>
              <ItemTasks
                task={item}
                reward={item.task.reward}
                name={item.task.name}
                img={`${api_url}${item.task.image.image_url}`}
                onOpen={handleOpen}
              />
            </li>
          ))}
        </ul>
      </div>
      <SlidingPanel
        initialHeight="60%"
        fullHeight="60%"
        darkened
        onClose={handleClose}
        isOpen={isOpen}
        lazy
      >
        {infoTask && <div>{infoTask.task.name}</div>}
      </SlidingPanel>
    </>
  );
}
