import React, { Component } from "react";
import Style from './AddContactDetails.module.css';

class EditContactDetails extends Component {
	constructor(props) {
		super(props)
		const { id, name, email, phone } = this.props.location.state.contact;
		this.state = {
			id,name,email,phone,isValid:true
		}
		console.log("in constructor of Edit Contact details 1");
	}
	update = (event) => {
		event.preventDefault();
		if (this.state.id === "" || this.state.name === "" || this.state.email === ""
			|| this.state.phone === ""		) {
			alert("all the fields are manditory");
			this.setState({ isValid: false })
			return;
		}
		this.setState({ isValid: true })
		console.log("update");
		console.log("state in edit", this.state)
		this.props.updateContactHandler(this.state);
		this.setState({ id: "", name: "", email: "", phone: "" }); //initialize the state to clear the form
		console.log("props in edit", this.props);
		this.props.history.push("/");
	}
	render() {
		console.log("in render function Edit Contact ")
		return (
			<div>
				<h2>Edit Contact Details </h2>
				<form style={{ textAlign: "center" }}>
					<label className={!this.state.isValid ? Style.isnotvalid : Style.isvalid}>Id : </label><input type="text" name="id"
						value={this.state.id}
						onChange={(event) => { this.setState({ id: event.target.value }) }}
						className={!this.state.isValid ? Style.invalidinput : Style.input} /><br />
					<label className={!this.state.isValid ? Style.isnotvalid : Style.isvalid}>Name : </label><input type="text" name="name"
						value={this.state.name}
						onChange={(event) => { this.setState({ name: event.target.value }) }}
						className={!this.state.isValid ? Style.invalidinput : Style.input} /><br />
					<label className={!this.state.isValid ? Style.isnotvalid : Style.isvalid}>Email : </label><input type="text" name="email"
						value={this.state.email}
						onChange={(event) => { this.setState({ email: event.target.value }) }}
						className={!this.state.isValid ? Style.invalidinput : Style.input} /><br />
					<label className={!this.state.isValid ? Style.isnotvalid : Style.isvalid}>Phone : </label><input type="text" name="phone"
						value={this.state.phone}
						onChange={(event) => { this.setState({ phone: event.target.value }) }}
						className={!this.state.isValid ? Style.invalidinput : Style.input} /><br />
					<button type="button" onClick={this.update}>Submit</button>
					<br /><br /><br />
				</form>
			</div>
		);
	}
}
export default EditContactDetails;