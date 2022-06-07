import axios from "axios";
import swal from "@sweetalert/with-react";
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault(); //evita que el evento desencadene la accion por defecto que tiene, en este caso, enviar el formulario
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ( email==='' || password===''){
            swal(
                <h2>los campos no pueden estar vacios</h2>
            )
        }
        if (email!== '' && !regexEmail.test(email)){
            swal(
                <h2>debes escribir una direccion de correo electronico valida</h2>
                )
        }
        if (email !== 'challenge@alkemy.org' || password!== 'react'){
            swal(
                <h2>credenciales invalidas</h2>
            )
        }

        axios
            .post('http://challenge-react.alkemy.org',{ email, password })//axios para el metodo post va a necesitar 2 cosas: por un lado la url del endpoint y por otro los datos que la api espera en forma de objeto
            .then(res => {
                swal(<h2>Perfecto, estas dentro</h2>)
                localStorage.setItem('token', res.data.token);
                navigate('/listado')
            })

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