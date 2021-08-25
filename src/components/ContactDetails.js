import React from 'react';
import Style from './ContactDetails.module.css';

const ContactDetails=(props)=>{
    return (
        <div>
            <ul style={{ listStyleType: "none"}}>
                {props.contacts.map((contact) => {
                    return (
                        <li className={Style.card} key={contact.id}>
                            <table className={Style.cardformat}>
                                <tbody>
                                    <tr>
                                        <td className={Style.cardleft }>Name: {contact.name}</td>
                                        <td className={Style.cardright}><button>Delete</button></td>
                                    </tr>
                                    <tr>
                                        <td className={Style.cardleft}>Email: {contact.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/*ID: {contact.id}, Name: {contact.name}, Email: {contact.email},*/}
                            {/*Phone: {contact.phone}*/}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ContactDetails;