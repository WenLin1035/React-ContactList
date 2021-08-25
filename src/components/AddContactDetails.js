import React, { Component } from "react";
import Style from './AddContactDetails.module.css';

class AddContactDetails extends Component{
    state={
        id: "", name: "", email: "", phone: "", isValid:true
    }

    add=(event)=>{
        event.preventDefault();
        if (this.state.id === "" || this.state.name === "" || this.state.email === "" ||
            this.state.phone === "") {
            alert("all the fields are manditory");
            this.setState({ isValid: false });
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ id: "", name: "", email: "", phone: "",isValid:true}); //reset form

    }
    render(){
        return (
            <div>
               <h1>Add Contact Details </h1>
               <form style={{ textAlign: "center" }}>
                    <label className={!this.state.isValid ? Style.isnotvalid : Style.isvalid}>Id : </label><input type="text" name="id"
                        value={this.state.id}
                        onChange={(event) => { this.setState({ id: event.target.value }) }}
                        className={!this.state.isValid?Style.invalidinput:Style.input} /><br />
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
                  <button type="button" onClick={this.add}>Submit</button>
              </form>
           </div>
       );
    }

}

export default AddContactDetails;