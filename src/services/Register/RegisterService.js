import { navigate } from "svelte-navigator"
import { userRegister } from "../../api/RegisterApi"

const rutFormat = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/
const cellphoneFormat = /^[+]{1}\d+$/
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const registerSubmit = (event) => {
    event.preventDefault()
    if(event.submitter.name === "cancel"){
        navigate("/login")
    }
    else if(event.submitter.name === "register"){
        let user = {first_name: "", last_name: "", rut: 0, password: "", email: "", cellphone: "", is_admin: false}
        const userData = Object.fromEntries(Array.from(new FormData(event.target)));
        for(const attribute in userData){
            if(attribute !== "password"){
                user[attribute] = userData[attribute].toString().trim();
            }
            else{
                user[attribute] = userData[attribute].toString()
            }
        }
        if(!userData["rut"].toString().trim().match(rutFormat)){
            alert("Rut invalido")
            return
        }
        if(!user["email"].toString().trim().match(emailFormat)){
            alert("Email invalido")
            return
        }
        if(!user["cellphone"].toString().trim().match(cellphoneFormat)){
            alert("Numero de telefono invalido")
            return
        }
        if(user["password"].toString().trim().length === 0){
            alert("Contraseña vacia")
            return
        }
        user["rut"] = parseInt(userData["rut"].toString().trim().replace(/\./g,"").replace("-",""))
        userRegister(user)
    }
}

export const passwordChange = (event) => {
    let input = document.getElementById("Password")
    if(event.target.value.length < 6){
        event.target.style.background =  "rgba(255, 0, 0, 0.3)"
    }
    else{
        event.target.style.background =  "rgba(0, 255, 0, 0.3)"
    }
} 

export const backgroundPassword = (event) => {
    event.target.style =  "default"
}

export const cancelSubmit = (event) => {
    event.preventDefault()
    navigate("/login")
}