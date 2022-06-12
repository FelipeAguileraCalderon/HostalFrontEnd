import { navigate } from "svelte-navigator"

const rutFormat = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/
const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const registerSubmit = (event) => {
    event.preventDefault()
    if(event.submitter.name === "cancel"){
        navigate("/login", { replace: true })
    }
    else if(event.submitter.name === "register"){
        let user = {first_name: "", last_name: "", rut: 0, password: "", email: "", cellphone: ""}
        const userData = Object.fromEntries(Array.from(new FormData(event.target)));
        for(const attribute in userData){
            if(attribute !== "password"){
                user[attribute] = userData[attribute].toString().trim();
            }
        }
        if(!userData["rut"].toString().trim().match(rutFormat)){
            alert("Rut invalido")
            return
        }
        user["rut"] = parseInt(userData["rut"].toString().trim().replace(/\./g,"").replace("-",""))
        // navigate("/home", { replace: true })
        console.log(user)
    }
}