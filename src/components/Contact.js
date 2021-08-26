import React, { Component} from 'react';
import Style from './ContactDetailsList.module.css';

class Contact extends Component {
    componentDidMount() {
        console.log("in componentdismount contact")
    }
    componentWillUnmount() {
        console.log("contact will unmount");
    }
    

    render() {
        //console.log("About to make li for: ", this.props.name)
        return <li className={Style.card}>
            <table className={Style.tablewidth }>
                <td className={Style.colwidth }>
                    Name: {this.props.contact.name}
                </td>
                <td className={Style.colwidth}>
                    Email: {this.props.contact.email}
                </td>
            </table>
            </li>
    }
}
export default Contact;