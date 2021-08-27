import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Style from './ContactDetailsList.module.css';

const ContactCardList = (props) => {
    const inpref = useRef(""); // using it to create refernce of seacrch text box you may use this instead of event.target.value
    const deleteContact = (id) => {
        console.log("This is delete contact id: ", id)
        props.deleteHandler(id);
    }
    const getSearchTerm = () => {
        props.searchKeyword(inpref.current.value);
    }
    return (
        <div>
            <div>
                {/*<h2>Contact List</h2>*/}
                <Link to="/add">
                    <div className= {Style.offrightby10}>
                        <button type="text" className="btn btn-primary text-right">Add contacts</button>
                    </div>
                </Link>
            </div>
            {/*<div className="form-group has-search col-8">
                 <input type="search" ref={inpref} id="inputValidation" value={props.searchText} placeholder="Search" onChange={getSearchTerm}></input> 
            </div>*/}
            <div>
                <ul style={{ listStyleType: "none" }}>
                    {props.contacts.map((contact) => {
                        return (
                            //creates contact cards
                            <ContactInfo key={contact.id } contact={contact} clickHandler={deleteContact} />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ContactCardList;