import axios from "axios";
import { validateResponse } from "./validateResponse";

const api_url =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_BASE_URL;

export function allTasks() {
  return axios
    .get(`${api_url}/api/all_tasks/`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}

export function changeStatus(xtaskid: number) {
  return axios
    .post(`${api_url}/api/change_status/`, {}, {
        headers: {
          xtaskid: xtaskid
        }
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}

export function takeReward(xtaskid: number) {
  return axios
    .post(`${api_url}/api/take_reward/`, {}, {
        headers: {
          xtaskid: xtaskid
        }
    })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(validateResponse);
}
