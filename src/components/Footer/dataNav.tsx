import {AboutUsSvg, HomeSvg, LvlStarSvg, TasksSvg, ServicesSvg} from '../../assets/svg'

export const dataNav = [
  {
    id: "1",
    svg: <HomeSvg />,
    title: "Главная",
    path: "/",
  },
  {
    id: "2",
    svg: <TasksSvg />,
    title: "Задания",
    path: "/tasks",
  },
  {
    id: "3",
    svg: <LvlStarSvg />,
    title: "Уровни",
    path: "/lvl",
  },
  {
    id: "4",
    svg: <ServicesSvg />,
    title: "Услуги",
    path: "/services",
  },
  {
    id: "5",
    svg: <AboutUsSvg />,
    title: "О нас",
    path: "/aboutus",
  },
];
