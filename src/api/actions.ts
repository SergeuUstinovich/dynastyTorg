import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function sendAction(xactionid: number) {
  return axios
    .post(`${api_url}/api/send_action/`, {}, {
        headers: {
            xactionid: xactionid
        }
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}
