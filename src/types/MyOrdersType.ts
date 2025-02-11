export interface MyOrdersScheme {
    myOrder?: MyOrdersType
}

export interface MyOrdersType {
  completed_order: MyOrdersItemType[];
  active_order: MyOrdersItemType[];
}

export interface MyOrdersItemType {
  id: number;
  product: string;
  number_of_order: number;
  created_status: StatusType | null;
  in_progress_status: StatusType | null;
  completed_status: StatusType | null;
  image: ImgType[];
}

interface StatusType {
  name: string;
  datatime: string;
}

interface ImgType {
    image_url: string;
}
