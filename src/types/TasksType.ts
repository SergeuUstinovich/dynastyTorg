export interface TasksType {
  data_1: TasksKey;
  data_2: TasksKey;
}

export interface TasksKey {
  topic: string;
  tasks: TasksTypeKey[];
}

export interface TasksTypeKey {
  can_take: boolean;
  taken: boolean;
  task: {
    id: number;
    name: string;
    reward: number;
    link: string;
    image: {
      image_url: string;
    };
  };
}

export interface TasksScheme {
    tasks?: TasksType;
}
