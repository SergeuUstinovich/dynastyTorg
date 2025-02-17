export interface LvlType {
  name: string;
  value_min: number;
  value_max: number;
  sale: number;
  info: string;
  sigma: string;
  otrisovka_kv: number;
  infoLvl?: InfoLvlType[]
}

export interface LvlScheme {
    lvl?: LvlType[]
}

interface InfoLvlType {
  title: string;
  descr: string;
}
