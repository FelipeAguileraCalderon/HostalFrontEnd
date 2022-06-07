<script>

    const error = ''

    const handleSubmit = (e) => {}

    const handleChange = (e) => {}

</script>

<main>
    <div class='login-main-container'>
        <form class='login-form' on:submit={handleSubmit}>
            <div class='login-img-container'>
                <img class='login-img' src='src\assets\HostalRemovedBG.png' alt='logo'/>
            </div>
            <div class='login-data-container'>
                <div>
                    <h3 class='login-h3'>Correo electrónico:</h3>
                    <input type='email' name='email' on:change={handleChange} placeholder='youremail@company.com' class='login-input'/>
                    <h3 class='login-h3'>Contraseña:</h3>
                    <input type='password' on:change={handleChange} name='password' class='login-input'/>  
                </div>
                <div class='login-submit-container'>
                    <input type='submit' value='Iniciar sesión'/>
                </div>
            </div>
        </form>
    </div>
</main>

<style>

</style>