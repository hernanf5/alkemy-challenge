function Login() {

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ( email==='' || password===''){
            console.log('los campos no pueden estar vacios');
        }
        if (email!== '' && !regexEmail.test(email)){
            console.log('debes escribir una direccion de correo electronico valida')
        }
        if (email !== 'challenge@alkemy.org' || password!== 'react'){
            console.log('credenciales invalidas')
        }
        console.log('Ok estamos listos para enviar la informacion')
    }
    return(
        <>
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electrónico:</span><br/>
                <input type='text' name="email"/>
            </label>
            <br/>
            <label>
                <span>Contraseña:</span><br/>
                <input type='password' name="password"/>
            </label>
            
            <br/>
            <button type="submit">Ingresar</button>
        </form>
        </>
    )
}

export default Login