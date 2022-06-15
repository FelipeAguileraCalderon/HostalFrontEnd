<script>
    import { onMount } from "svelte";
    import axios from "../../services/Axios"
    import { currentUserData } from "../../api/UserApi";
    onMount(async () => {
        try {
            const user = await axios.get("http://127.0.0.1:8000/api/rooms")
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    })
</script>

<main>
    <h1>El pepe</h1>
</main>

<style>
    
</style>