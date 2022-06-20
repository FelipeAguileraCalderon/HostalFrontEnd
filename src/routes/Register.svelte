<script>
    //Imports
    import { registerSubmit, passwordChange, backgroundPassword, cancelSubmit } from "../services/Register/RegisterService";

</script>

<main>
    <div class='login-main-container'>
        <form class='login-form' on:submit={registerSubmit}>
            <div class='login-img-container'>
                <img class='login-img' src='..\src\assets\HostalRemovedBG.png' alt='logo'/>
            </div>
            <div class='login-data-container'>
                <div> 
                    <label for="Rut" class='login-h3'>Rut (Ej: 12.345.678-9):</label>
                    <input id="Rut" type='text' name='rut' class='login-input'/>
                    <label for="Name" class='login-h3'>Nombre:</label>
                    <input id="Name" type='text' name='first_name' class='login-input' required/> 
                    <label for="LastName" class='login-h3'>Apellido:</label>
                    <input id="LastName" type='text' name='last_name' class='login-input' required/> 
                    <label for="Email" class='login-h3'>Correo electrónico:</label>
                    <input id="Email" type='email' name='email' placeholder='youremail@company.com' class='login-input'/>
                    <label for="Password" class='login-h3'>Contraseña:</label>
                    <input id="Password" type='password' pattern={String.raw`.{6,}`} on:change={backgroundPassword} on:input={passwordChange} title="6 caracteres minimo" name='password'/>  
                    <label for="Phone" class='login-h3'>Numero de telefono (Ej: +123123123):</label>
                    <input id="Phone" type='text' name='cellphone' class='login-input'/>  
                    <label for="DateOfBirth" class='login-h3'>Fecha de nacimiento:</label>
                    <input id="DateOfBirth" type='date' name='date_of_birth' min="1990-01-01" class='login-input' required/>  
                </div>
                <div class='login-submit-container'>
                    <input name="register" type='submit' value='Registrarse'/>
                    <input name="cancel" on:change={cancelSubmit} type="submit" value="Cancelar"/>
                </div>
            </div>
        </form>
    </div>
</main>

<style>

</style>