import React, { Component } from "react";
import Style from './AddContactDetails.module.css';

class AddContactDetails extends Component{
    //state={
    //    id: "", name: "", email: "", phone: "", isValid:true
    //}

    //first 1
    constructor(props) {
        super(props);
        this.state = {
            id: "", name: "", email: "", phone: "", isValid: true
        }
        //console.log("in constructor of AddContact details 1");
    }

    //Second - gets the current state
    static getDerivedStateFromProps() {
        //console.log("in getDerivedStateFromProps 2")
    }

    //Forurth - reads data
    componentDidMount() {
        ///api calls
        //reading data from file or database 
        //console.log("in componentDidMount")
    }

    //Fifth(after updation)
    shouldComponentUpdate() {
        //console.log("in shouldComponentUpdate")
        return true;
    }

    //seventh(after update)
    getSnapshotBeforeUpdate() {
        //console.log("in getSnapshotBeforeUpdate")
        return true;
    }

    //Eight(after update)
    componentDidUpdate() {
        //console.log("in componentDidUpdate")
    }

    //nineth Last
    componentWillUnmount() {
        //console.log("in componentWillUnmount")
    }

    add=(event)=>{
        event.preventDefault();
        if (this.state.id === "" || this.state.name === "" || this.state.email === "" ||
            this.state.phone === "") {
            alert("all the fields are manditory");
            this.setState({ isValid: false });
            return;
        }
        this.setState({ isValid: true })
        this.props.addContactHandler(this.state);
        this.setState({ id: "", name: "", email: "", phone: "",isValid:true}); //reset form

    }
    // add value property and onchange event handler for two way binding between 
    //state property and form elements
    //Third
    //sixth
    render(){
        return (
            <div>
               <h2>Add Contact Details </h2>
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
                    <br /><br /><br />
              </form>
           </div>
       );
    }

}

export default AddContactDetails;