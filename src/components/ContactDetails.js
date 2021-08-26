import React, { Component} from 'react';
import Contact from './Contact';
import Style from './ContactDetailsList.module.css';


class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showcontacts: true
        }
    }
    //state = {
    //    showcontacts: true
    //}
    toggleShowHandler = () => {
        console.log(this.props.clist)
        this.setState((prevState) => {
            return {showcontacts:!prevState.showcontacts}
        })
    }
    render() {
        console.log("in render of ContactDetails");
        //console.log(this.props.clist);
        const contactlist = (
            <ul style={{ listStyleType: "none" }}>
                {
                    this.props.clist.map((contact) => {
                        return <Contact key={contact.id} contact={contact} />
                        
                    })
                }
            </ul>
        );
        return (
            <div className={Style.cardformat}>
                <button type="button" onClick={this.toggleShowHandler}>
                    {this.state.showcontacts ? "Hide" : "show"} Contacts
                </button>
                <br /><br />
                {this.state.showcontacts && contactlist}
            </div >
        );
    }
}

export default ContactDetails;