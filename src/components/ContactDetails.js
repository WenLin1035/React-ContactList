import React from 'react';

const ContactDetails=(props)=>{
    return (
        <div>
            <ul>
                {props.contacts.map((contact) => {
                    return (
                        <li style={{ textAlign: "left" }}>ID: {contact.id}, Name: {contact.name}, Email: {contact.email},
                            Phone: {contact.phone}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ContactDetails;