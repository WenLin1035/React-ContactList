import React from 'react';
import { PersonCircle, Trash } from 'react-bootstrap-icons';

const ContactInfo = (props) => {
	const {id,name,email,phone} = props.contact
	return (
		<div className='container border-bottom'>
			<div className="row">
				<div className="col-1">
					<PersonCircle/>
				</div>
				<div className="col-8 text-left">
					<p>{name}</p>
					<p>{email }</p>
				</div>
				<div className="col-3">
					<Trash />
				</div>
			</div>
		</div>
	)
}

export default ContactInfo;