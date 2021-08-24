import React,{Component} from "react";

class AddContactDetails extends Component{
    state={
        id: "", name: "", email: "", phone: ""
    }

    add=(event)=>{
        event.preventDefault();
        if (this.state.id === "" || this.state.name === "" || this.state.email === "" ||
            this.state.phone === "") {
            alert("all the fields are manditory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ id: "", name: "", email: "", phone: ""}); //reset form

    }
    render(){
       return(
           <div>
               <h1>Add Contact Details </h1>
               <form style={{ textAlign:"center" }}>
                  Id : <input type="text" name="id" 
                     value={this.state.id}
                     onChange={(event) => { this.setState({ id: event.target.value }) }} /><br/>
                  Name : <input type="text" name="name"
                     value={this.state.name}
                       onChange={(event) => { this.setState({ name: event.target.value }) }} /><br />
                  Email : <input type="text" name="email"
                     value={this.state.email}
                       onChange={(event) => { this.setState({ email: event.target.value }) }} /><br />
                  Phone : <input type="text" name="phone"
                     value={this.state.phone}
                       onChange={(event) => { this.setState({ phone: event.target.value }) }} /><br />
                  <button type="button" onClick={this.add}>Submit</button>
              </form>
           </div>
       );
    }

}

export default AddContactDetails;