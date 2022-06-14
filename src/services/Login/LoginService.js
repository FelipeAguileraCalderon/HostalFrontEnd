import { login } from "../../api/LoginApi"

export const loginSubmit = (event) => {
    event.preventDefault()
    const user = {email: "", password: ""}
    const userCredentials = Object.fromEntries(Array.from(new FormData(event.target)))
    for(const credential in userCredentials){
        user[credential] = userCredentials[credential]
    }
    login(user)
}