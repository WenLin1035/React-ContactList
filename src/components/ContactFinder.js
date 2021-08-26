import React, { Component, Fragment} from 'react';
import ContactDetails from './ContactDetails';
import ContactCardList from './ContactCardList';
import Style from './ContactDetailsList.module.css';

//useEffect const
//const LOCAL_STORAGE_KEY = "contactlist";

//useState const
//const [contactlist, setContactlist] = useState([{ id: 1, name: "Wen", email: "wen@gmail.com", phone: 111 }]);

//useEffect to get data from file or local storage


class ContactFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactlist: [],
            selectedContact: [],
            searchtext: ''
        }
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }

    componentDidMount() {
        // console.log("in componentDidMount productFinder");
        // send http request
        //console.log("This is props for contactfinder Mount:")
        this.setState({ selectedContact: this.props.contacts })
        this.setState({contactlist: this.props.contacts})
        console.log("ContactFinder componentDidMount list of contacts: ", this.props.contacts)
    }

    componentDidUpdate(prevProps, prevState) {        ///useEffect(    ,[perarr])
        //console.log("in componentDid update contactfinder 1");
        //console.log(prevState);
        console.log("in componentDidupdate contactFinder 2" + prevState.searchtext + "-----" + this.state.searchtext);
        //console.log(this.props.contacts);
        //updates contacts shown after a new contact is added
        if (prevState.contactlist.length !== this.props.contacts.length) {
            this.setState({ contactlist: this.props.contacts })
            this.setState({ selectedContact: this.props.contacts})
        }
        //shows contacts user searched for
        if (prevState.searchtext !== this.state.searchtext || (prevState.searchtext === this.state.searchtext && prevState.contactlist.length !== this.props.contacts.length)) {
            //console.log("in componentDidUpdate contactfinder 3");
            this.setState({
                selectedContact: this.props.contacts.filter((prod) => {
                    //console.log("filtering: ", prod)
                    return prod.name.includes(this.state.searchtext);
                })
            });
            console.log("After filtering in componentDidUpdate in ContactFinder: ", this.state.selectedContact)
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchtext: event.target.value })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label>Search: </label><input type="search" onChange={this.searchChangeHandler}></input>
                </div>
                <br />
                <div className={Style.cardleft}>
                    <h2 className={Style.cardformat }>Contact List</h2>
                    <ContactDetails clist={this.state.selectedContact} />
                </div>
                <div className={Style.cardright}>
                    <h2>Contact Cards</h2>
                    <ContactCardList contacts={this.state.selectedContact}/>
                </div>
            </Fragment>
        )
    }
}

export default ContactFinder;