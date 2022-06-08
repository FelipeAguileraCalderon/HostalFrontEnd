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

    main{
        height: 100%;
        width: 100%;
        background: url("../assets/login-background.png");
    }
    .login-main-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-form{
        width: 600px;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: white;
        border-radius: 5px;
        border: 1px solid black;
        box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.4);
    }
    
    .login-img-container{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--principal);
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid black;
    }

    .login-img{
        height: 100px;
        width: auto;
        object-fit: contain;
    }

    .login-data-container{
        margin: 15px 5px 0 5px;
    }    
    
    .login-h3{
        margin: 5px 0 5px 0;
    }

    .login-input{
        width: 250px;
        height: 25px;
    }

    .login-submit-container{
        width: 100%;
        margin: 10px 0 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-submit-container input{
        width: 100px;
        height: 25px;
        font-weight: bold;
        font-size: 13px;
    }

</style>