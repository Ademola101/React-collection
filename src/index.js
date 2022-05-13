import ReactDOM from 'react-dom'
import App from './App'
import axios from "axios"
const promise = axios.get('127.0.0.1:3001/notes');
console.log(promise);
const promise2 = axios.get('127.0.0.1:3001/foobar');
console.log(promise2);
ReactDOM.render(
  <App  />,
  document.getElementById('root')
)