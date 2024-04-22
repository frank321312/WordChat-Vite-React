import { PropTypes } from 'prop-types';
import './input.css';

function InputText({ nombre, funcionOnChange, holder, colorFondo, colorFondo2 }) {

    function devolverMensajeError() {
        if (colorFondo2) {
            colorFondo = false;
            return "Nombre invalido";
        } else if (colorFondo) {
            return "Ingrese mas de 3 caracteres";
        }
    }

    return (
        <>
         <input 
          className="input-form transicion"
          type='text'
          style={{
             padding: "1.5px 9px",
             height: "29px",
             backgroundColor: colorFondo || colorFondo2 ? "#E6A4A4" : "#D9D9D9",
             marginBottom: colorFondo || colorFondo2 ? "0" : "16px"
          }} 
          onChange={(e) => funcionOnChange(e)} 
          value={nombre}
          placeholder={holder}
         />
         {
            colorFondo2 && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
         {
            colorFondo && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
        </>
    );
}

export function InputEmail({ nombre, funcionOnChange, holder, colorFondo, colorFondo2 }) {

    function devolverMensajeError() {
        if (colorFondo2) {
            colorFondo = false;
            return "Correo invalido";
        } else if (colorFondo) {
            return "Falta '@gmail.com'";
        }
    }

    return (
        <>
         <input 
          className="input-form transicion"
          type='text'
          pattern
          style={{
             padding: "1.5px 9px",
             height: "29px",
             backgroundColor: colorFondo || colorFondo2 ? "#E6A4A4" : "#D9D9D9",
             marginBottom: colorFondo || colorFondo2 ? "0" : "16px"
          }} 
          onChange={(e) => funcionOnChange(e)} 
          value={nombre}
          placeholder={holder}
         />
         {
            colorFondo2 && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
         {
            colorFondo && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
        </>
    );
}

export function InputPassword({ nombre, funcionOnChange, holder, colorFondo, colorFondo2 }) {

    function devolverMensajeError() {
        if (colorFondo2) {
            colorFondo = false;
            return "contraseña invalido";
        } else if (colorFondo) {
            return "Ingrese mas de 5 caracteres";
        }
    }

    return (
        <>
         <input 
          className="input-form transicion"
          type='password'
          style={{
             padding: "1.5px 9px",
             height: "29px",
             backgroundColor: colorFondo || colorFondo2 ? "#E6A4A4" : "#D9D9D9",
             marginBottom: colorFondo || colorFondo2 ? "0" : "16px"
          }} 
          onChange={(e) => funcionOnChange(e)} 
          value={nombre}
          placeholder={holder}
         />
         {
            colorFondo2 && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
         {
            colorFondo && <p style={{color: "#C73C3C", marginBottom: "16px"}}>{devolverMensajeError()}</p> 
         }
        </>
    );
}

InputText.propTypes = {
    nombre: PropTypes.string.isRequired,
    funcionOnChange: PropTypes.func.isRequired,
    holder: PropTypes.string.isRequired,
    colorFondo: PropTypes.bool.isRequired,
    colorFondo2: PropTypes.bool.isRequired,
}

InputEmail.propTypes = {
    nombre: PropTypes.string.isRequired,
    funcionOnChange: PropTypes.func.isRequired,
    holder: PropTypes.string.isRequired,
    colorFondo: PropTypes.bool.isRequired,
    colorFondo2: PropTypes.bool.isRequired,
}

InputPassword.propTypes = {
    nombre: PropTypes.string.isRequired,
    funcionOnChange: PropTypes.func.isRequired,
    holder: PropTypes.string.isRequired,
    colorFondo: PropTypes.bool.isRequired,
    colorFondo2: PropTypes.bool.isRequired,
}

export default InputText;