import { PropTypes } from 'prop-types';
import './button.css';

function BotonForm({ children, texto }) {
    return (
        <button type='sumbit' style={{height: "29px", color: texto}} className=' bg-morador-azul first:w-full mb-4 mt-1 rounded-md tramsicion-boton-enviar'>
            { children }
        </button>
    );
}

export function BotonGris({ children, texto }) {
    return (
        <button style={{height: "29px", color: texto}} className=' bg-gris-blanco first:w-full mb-4 mt-1 rounded-md transicion-gris'>
            { children }
        </button>
    );
}

BotonForm.propTypes = {
    children: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
}

BotonGris.propTypes = {
    children: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
}

export default BotonForm;
   