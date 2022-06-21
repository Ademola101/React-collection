import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes"


const getAll = () => {
  const request =  axios.get(baseUrl);
  return request.then((response) => response.data)
};

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const noteService = { 
  getAll,
  create,
  update
};
export default noteService