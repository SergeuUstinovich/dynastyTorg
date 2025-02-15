import axios from "axios";
import { validateResponse } from "./validateResponse";

axios.defaults.withCredentials = true;

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function mainPage(initData: string) {
  return axios
    .get(`${api_url}/api/main_page/`, {
      headers: {
        Authorization: initData,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function myOrder() {
  return axios
    .get(`${api_url}/api/my_order/`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function calculateForm (
  product: string,
  weight: number,
  city: string,
  mobile_phone: number,
  email: string | undefined | null
) {
  return axios
    .post(`${api_url}/api/calculator_form/`, {
      product,
      weight,
      city,
      mobile_phone,
      email
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
};
