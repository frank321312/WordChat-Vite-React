import { PropTypes } from 'prop-types';
import './styleForm.css';

function Formulario({ children, funcionOnSubmit }) {
    return (
        <>
            <form 
             style={{boxShadow: "-2px 2px 20px 1px #000", width: "310px"}} 
             className='p-7 shadow-xl rounded-xl bg-white flex h-max justify-center flex-col w-66'
             onSubmit={(e) => funcionOnSubmit(e)} 
            >
                {children}
            </form>
        </>
    );
}

Formulario.propTypes = {
    children: PropTypes.node.isRequired,
    funcionOnSubmit: PropTypes.func.isRequired,
}

export default Formulario;
    