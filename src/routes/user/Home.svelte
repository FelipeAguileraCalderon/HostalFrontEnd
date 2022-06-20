<script>
    import { user } from "../../store";
    let userData = {}
    user.subscribe(value => userData = value)
</script>

<main>
    <h1>`Hola ${userData.first_name}`</h1>
</main>

<style>
    
</style>