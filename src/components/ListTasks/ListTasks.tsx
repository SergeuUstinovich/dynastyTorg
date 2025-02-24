import { useEffect, useState } from "react";
import { ItemTasks, TitlePage } from "..";
import { TasksType, TasksTypeKey } from "../../types/TasksType";
import style from "./ListTasks.module.scss";
import { queryClient } from "../../api/queryClient";
import { SlidingPanel } from "../../ui/SlidingPanel";
import img from "../../assets/png/slideInfo.png";
import { ServicesSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import { useTelegram } from "../../providers/telegram/telegram";
import { useNavigate } from "react-router-dom";
import { useAllMutate } from "../../utils/useAllMutate";

interface ListTasksProps {
  arr: TasksType;
}

const api_url = import.meta.env.VITE_API_BASE_URL;

export function ListTasks({ arr }: ListTasksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [infoTask, setInfoTask] = useState<TasksTypeKey>();
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const { changeStatusMutate, takeRewardMutate } = useAllMutate();
  const [linkTask, setLinkTask] = useState<string>();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  }, []);

  const handleOpen = (task: TasksTypeKey) => {
    setIsOpen(true);
    setInfoTask(task);
  };

  const handleRefreshTask = (task: TasksTypeKey) => {
    setInfoTask(task);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleTake = (id: number) => {
    takeRewardMutate.mutate({ id });
  };

  const handleLink = (id: number, link: string) => {
    changeStatusMutate.mutate({ id });
    setLinkTask(link);
  };

  const handleOpenLink = (link: string) => {
    if (link) {
      if (link.startsWith("https://t.me/")) {
        tg.openTelegramLink(link);
      } else if (link.startsWith("http")) {
        tg.openLink(link);
      } else {
        navigate(link);
      }
    }
  };

  useEffect(() => {
    if (changeStatusMutate.isSuccess) {
      if (linkTask) {
        if (linkTask.startsWith("https://t.me/")) {
          tg.openTelegramLink(linkTask);
        } else if (linkTask.startsWith("http")) {
          tg.openLink(linkTask);
        } else {
          navigate(linkTask);
        }
      }
    }
  }, [changeStatusMutate.isSuccess, linkTask, tg, navigate]);

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
                refreshTask={handleRefreshTask}
                taken={item.taken}
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
                refreshTask={handleRefreshTask}
                taken={item.taken}
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
        {infoTask && (
          <div className={style.boxSlide}>
            <img className={style.slideImg} src={img} alt="" />
            <h2 className={style.slidetitle}>{infoTask.task.name}</h2>
            <div className={style.boxCount}>
              <div className={style.bgCount}>
                <div className={style.svgBox}>
                  <ServicesSvg className={style.svgServices} />
                </div>
                <p className={style.descr}> + {infoTask.task.reward}</p>
              </div>
            </div>
            <div className={style.boxBtn}>
              <Button
                isDisabled={!infoTask.can_take || infoTask.taken}
                isLoading={takeRewardMutate.isPending}
                onClick={() => handleTake(infoTask.task.id)}
                className={style.checkBtn}
                kind="secondary"
              >
                {infoTask.taken ? "Бонус получен!" : "Готово!"}
              </Button>
              <Button
                isLoading={changeStatusMutate.isPending}
                onClick={
                  !infoTask.can_take
                    ? () => handleLink(infoTask.task.id, infoTask.task.link)
                    : () => handleOpenLink(infoTask.task.link)
                }
                className={style.takeBtn}
              >
                Перейти
              </Button>
            </div>
          </div>
        )}
      </SlidingPanel>
    </>
  );
}
