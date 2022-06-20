import axios from "../services/Axios";
import { navigate } from "svelte-navigator";

export const userRegister = (user) =>{
    axios.post("http://127.0.0.1:8000/api/auth/register", user)
    .then((response) => {
        console.log(response.data)
        navigate("/login")
    })
    .catch((error) => {
        console.log(error)
        alert("La conexión con el servidor ha fallado 😓")
    })
}