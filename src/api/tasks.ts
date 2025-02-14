import axios from "axios";

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
