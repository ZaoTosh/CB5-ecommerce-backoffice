const url = "https://api.escuelajs.co/api/v1/";

export const GET = (type, id = "") => {
  return fetch(url + type + id).then((res) => res.json());
};
