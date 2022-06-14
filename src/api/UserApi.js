import axios from "../services/Axios"

export const currentUserData = async () => {
    const currentUserData = await axios.get("http://127.0.0.1:8000/api/auth/me")
    return currentUserData
}