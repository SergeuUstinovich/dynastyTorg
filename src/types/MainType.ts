export interface MainScheme {
    main?: MainType
}

export interface MainType {
  user: UserType;
  skidki: SkidkiType[];
  my_rang: MyRangType;
  dostavki: DostavkiType[];
  all_rang: AllRangType[];
  actions: ActionsType[];
  achievement: AchievementType[];
}

export interface UserType {
  tg_id: number;
  tg_username: string;
  tg_first_name: string;
  tg_last_name: string;
  photo_url: string;
  money: number;
  kg_order: number;
  city: string;
  mobile_phone: number;
  email: string;
}

export interface MyRangType {
  id: number;
  name: string;
  sale: number;
  sigma: {
    image_url: string;
  };
}

export interface DostavkiType {
  id: number;
  name: string;
  standart_price: number;
  standart_ot_day: number;
  standart_do_day: number;
  express_price: number;
  express_ot_day: number;
  express_do_day: number;
}

export interface ActionsType {
  id: number;
  image: {
    image_url: string;
  };
  description: string;
  price: number;
  text: string;
  created: string;
}

export interface AchievementType {
  id: number;
  achievement: {
    id: number;
    name: string;
    image: {
      image_url: string;
    };
  };
  access: boolean;
}

export interface AllRangType {
  id: number;
  name: string;
  sale: number;
  sigma: {
    image_url: string;
  };
}

export interface SkidkiType {
  id: number;
  rang: AllRangType;
  image: {
    image_url: string;
  };
  description: string;
  text: string;
  activate: boolean;
  created: string;
}
