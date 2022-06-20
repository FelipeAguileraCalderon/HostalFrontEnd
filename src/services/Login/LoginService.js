import { login } from "../../api/LoginApi"

export const loginSubmit = (event) => {
    event.preventDefault()
    const credentials = {email: "", password: ""}
    const userCredentials = Object.fromEntries(Array.from(new FormData(event.target)))
    for(const credential in userCredentials){
        credentials[credential] = userCredentials[credential]
    }
    login(credentials)
}