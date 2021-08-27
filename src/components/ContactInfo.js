import React from 'react';
import { PersonCircle, Trash, PenFill } from 'react-bootstrap-icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ContactInfo = (props) => {
	const {id,name,email,phone} = props.contact
	return (
		<div className='container border-bottom'>
			<div className="row">
				<div className="col-1">
					<PersonCircle/>
				</div>
				<div className="col-7 text-left">
					<p>{name}</p>
					<p>{email }</p>
				</div>
				<div className="col-2">
					<Link to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}>
						<div className="text-primary" ><PenFill /></div>
					</Link>
				</div>
				<div className="col-2" onClick={()=>props.clickHandler(props.contact.id) }>
					<Trash />
				</div>
			</div>
		</div>
	)
}

export default ContactInfo;