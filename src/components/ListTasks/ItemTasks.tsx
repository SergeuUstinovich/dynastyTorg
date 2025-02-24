import { Button } from "@headlessui/react";
import { ArrowSvg, CompliteTasksSvg, ServicesSvg } from "../../assets/svg";
import ImageContainer from "../../utils/ImageContainer";
import style from "./ListTasks.module.scss";
import { TasksTypeKey } from "../../types/TasksType";
import { useEffect } from "react";

interface ItemTasksProps {
  task: TasksTypeKey;
  reward: number;
  name: string;
  img: string;
  onOpen: (task: TasksTypeKey) => void;
  refreshTask: (task: TasksTypeKey) => void;
  taken: boolean;
}

export function ItemTasks(props: ItemTasksProps) {
  const { reward, name, img, onOpen, task, refreshTask, taken } = props;

  const handleOpen = (task: TasksTypeKey) => {
    onOpen(task);
  };

  useEffect(() => {
    if (task) {
      refreshTask(task);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task]);

  return (
    <>
      <Button onClick={() => handleOpen(task)} className={style.btn}>
        <div style={taken ? {opacity: '0.4'} : {}} className={style.boxInfo}>
          <ImageContainer className={style.img} src={img} x1x16 />
          <div className={style.boxTitle}>
            <h2 className={style.title}>{name}</h2>
            <div className={style.boxValue}>
              <div className={style.svgBox}>
                <ServicesSvg className={style.svgServices} />
              </div>
              <p className={style.descr}>+{reward}</p>
            </div>
          </div>
        </div>
        <div style={taken ? {backgroundColor: '#d4ffcc'} : {}} className={style.boxSvg}>
          {taken ? (
            <CompliteTasksSvg className={style.svgArrow} />
          ) : (
            <ArrowSvg className={style.svgArrow} />
          )}
        </div>
      </Button>
    </>
  );
}
