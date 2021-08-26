import React, { Component} from 'react';


class Contact extends Component {
    componentDidMount() {
        console.log("in componentdismount contact")
    }
    componentWillUnmount() {
        console.log("contact will unmount");
    }
    

    render() {
        //console.log("About to make li for: ", this.props.name)
        return <li>Name: {this.props.contact.name} Email: {this.props.contact.email }</li>
    }
}
export default Contact;