import Formulario from "../Formulario/Formulario";
import { useState } from "react";
import InputText, { InputEmail, InputPassword } from "../Input/Input";
import user from './Imagenes/user.png';
import iconGoogle from './Imagenes/iconGoogle.png';
import './style.css';
import BotonForm from '../Botenes/BotonForm';
import { BotonGris } from '../Botenes/BotonForm';

function FormRegistro() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [boolNombre, setBoolNombre] = useState(false);
    const [boolNombre2, setBoolNombre2] = useState(false);
    const [boolEmail, setBoolEmail] = useState(false);
    const [boolEmail2, setBoolEmail2] = useState(false);
    const [boolPass, setBoolPass] = useState(false);
    const [boolPass2, setBoolPass2] = useState(false);
    
    function handleSetNombre(event) {
        setNombre(event.target.value);
    }

    function handleSetEmail(event) {
        setEmail(event.target.value);
    }

    function handleSetPass(event) {
        setPass(event.target.value);
    }    

    function handleOnSubmit(e) {
        e.preventDefault();

        if (nombre.length < 4) {
            setBoolNombre(true);
        } else {
            setBoolNombre(false);
        }

        if (nombre[0] == " " || nombre[nombre.length - 1] == " " || nombre.length > 20) {
            setBoolNombre2(true);
        } else {
            setBoolNombre2(false);
        }

        if (email.length < 11 || email[0] == " " || email[email.length - 1] == " " || email.length > 45) {
            setBoolEmail2(true);
        } else {
            setBoolEmail2(false);
        }
        
        if (email.indexOf("@gmail.com") == -1) {
            setBoolEmail(true);
        } else {
            setBoolEmail(false);
        }

        if (pass.length < 6) {
            setBoolPass(true);
        } else {
            setBoolPass(false);
        }

        if (pass[0] == " " || pass[pass.length - 1] == " " || pass.length > 15) {
            setBoolPass2(true);
        } else {
            setBoolPass2(false);
        }

        console.log("Esto lo detiene");
    }

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-b from-morador-azul to-morado-blanco">
            <Formulario funcionOnSubmit={handleOnSubmit}>
                <header className="text-center mb-4 text-3xl">
                    <h1>Registrarse</h1>
                </header>

                <div className="flex justify-center">
                    <img src={user} alt="Usuario" className="img-user"/>
                </div>

                <label htmlFor="">Nombre de usuario:</label>
                <InputText nombre={nombre} funcionOnChange={handleSetNombre} holder={"Usuario"} colorFondo={boolNombre} colorFondo2={boolNombre2}/>
                
                <label htmlFor="">Correo electronico:</label>
                <InputEmail nombre={email} funcionOnChange={handleSetEmail} holder={"Email"} colorFondo={boolEmail} colorFondo2={boolEmail2}/>
                
                <label htmlFor="">Contraseña:</label>
                <InputPassword nombre={pass} funcionOnChange={handleSetPass} holder={"Contraseña"} colorFondo={boolPass} colorFondo2={boolPass2}/>
            
                <BotonForm texto={"#fff"}>Crear cuenta</BotonForm>
                <BotonGris texto={"#000"}>
                    <div className="flex justify-center ">
                        <img src={iconGoogle} style={{width: "23px", marginRight: "10px"}} alt="Icono" />
                        <p>
                            Registrarse con google
                        </p>
                    </div>                    
                </BotonGris>
            </Formulario>
        </div>
    );
}

export default FormRegistro;
 