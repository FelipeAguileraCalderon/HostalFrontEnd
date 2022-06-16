<script>
    import { onMount } from "svelte";
    import { currentUserData } from "../../api/UserApi";
    onMount(async () => {
        try {
            const user = await currentUserData()
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