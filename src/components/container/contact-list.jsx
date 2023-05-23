import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';



const ContactList = () => {
    const defaultContact = new Contact('Maikel','Cuevas','mai.cuevas@hot.com',false);

    return (
        <div>
        <div>
            <h1>El contacto es:</h1>
        </div>

        <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};





export default ContactList;
