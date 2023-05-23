import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
    const[status, setStatus] = useState(contact.conectado);

    const changeStatus = () => {
        setStatus(!status)
    }
    
    return (
        <div>
            <h2>
                Nombre : { contact.name }
            </h2>
            <h2>
                Apellido: { contact.lastName}
            </h2>
            <h3>
                Email : {contact.email}
            </h3>
            <h4>
                Estado : {status ? 'Contacto En Linea' : 'Contacto No Disponible'}
            </h4>

            <button onClick={changeStatus}> Cambiar estado</button>
        </div>
    );
};


ContactComponent.propTypes = {
 contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
