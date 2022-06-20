import axios from "../services/Axios"
import { user, loginState } from "../store"
import { navigate } from "svelte-navigator"

export const login = async (userCredentials) => {
    axios.post("http://127.0.0.1:8000/api/auth/login", userCredentials)
    .then( async response => {
        const userData = await axios.get("http://127.0.0.1:8000/api/auth/me",
        {
            headers: {
                Authorization: `Bearer ${response.data.access}`
            }
        })
        loginState.set(true)
        user.set({...response.data, ...userData})
        navigate("/home")
    })
    .catch(() => {
        alert("Las credenciales ingresadas son incorrectas 🛑")
    })
}