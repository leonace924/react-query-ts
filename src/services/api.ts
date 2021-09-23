import { API_ENDPOINT } from "../utils/config";

export const fetchUsers = () => {
  return fetch(API_ENDPOINT).then((res) => res.json());
};
