import belarus from '../../assets/svg/belarus.svg'
import kazakhstan from '../../assets/svg/kazakhstan.svg'
import russia from '../../assets/svg/russia.svg'
import uzbekistan from '../../assets/svg/uzbekistan.svg'

export const phoneMasks: { [key: string]: string } = {
  BY: "+375 (__) ___-__-__",
  KZ: "+7 (___) ___-__-__",
  RU: "+7 (___) ___-__-__",
  UZ: "+998 (__) ___-__-__",
};

export const countryOptions = [
  { id: "4", value: "RU", content: "Россия", img: russia, code: "+7" },
  { id: "2", value: "BY", content: "Беларусь", img: belarus, code: "+375" },
  { id: "3", value: "KZ", content: "Казахстан", img: kazakhstan, code: "+7" },
  { id: "1", value: "UZ", content: "Узбекистан", img: uzbekistan, code: "+998" },
];
