import axios from "../services/Axios"
import { currentUserData } from "./UserApi"
import { user } from "../store"
import { navigate } from "svelte-navigator"

export const login = (userCredentials) => {
    axios.post("http://127.0.0.1:8000/api/auth/login", userCredentials)
    .then( async response => {
        user.set({...response.data})
        navigate("/home")
    })
    .catch(() => {
        alert("Las credenciales ingresadas son incorrectas 🛑")
    })
}