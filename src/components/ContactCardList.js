import React from 'react';
import ContactInfo from './ContactInfo';

const ContactCardList=(props)=>{
    return (
        <div>
            <ul style={{ listStyleType: "none"}}>
                {props.contacts.map((contact) => {
                    return (
                        //creates contact cards
                        <ContactInfo contact={contact}/>
                    );
                })}
            </ul>
        </div>
    );
}

export default ContactCardList;