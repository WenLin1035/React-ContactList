import React,{Component} from "react";

class AddPersonDetails extends Component{
    state={
        id:"",name:"",desg:""
    }

    add=(event)=>{
        event.preventDefault(); /// stop the refreshing of the page
        //validation of the fir=elds in the form
        if(this.state.id==="" || this.state.name==="" || this.state.desg===""){
            alert("all the fields are manditory");
            return;
        }
        this.props.addPersonHandler(this.state);
        this.setState({id:"",name:"",desg:""}); //initialize the state to clear the form

    }
    // add value property and onchange event handler for two way binding between 
    //state property and form elements
    render(){
       return(
           <div>
              <h1>Add person Details </h1>
              <form >
                  Id : <input type="text" name="id" 
                     value={this.state.id}
                     onChange={(event)=>{this.setState({id:event.target.value})}}/>
                  Name : <input type="text" name="name" 
                     value={this.state.name}
                     onChange={(event)=>{this.setState({name:event.target.name})}}/>
                  Designation : <input type="text" name="desg" 
                      value={this.state.desg}
                      onChange={(event)=>{this.setState({desg:event.target.value})}}/>
                  <button type="button" onClick={this.add}>Add Person</button>
              </form>
           </div>
       );
    }

}

export default AddPersonDetails;