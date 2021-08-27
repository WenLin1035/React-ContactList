import './App.css';
import Header from "./components/Header";
import AddContactDetails from "./components/AddContactDetails";
//import ContactCardList from "./components/ContactCardList";
//import ContactDetails from "./components/ContactDetails";
import { useState, useEffect } from 'react';
import ContactFinder from './components/ContactFinder';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactCardList from './components/ContactCardList';
import EditContactDetails from './components/EditContactDetails';

function App() {

    //useEffect const
    const LOCAL_STORAGE_KEY = "contactlist";

    //useState const
    const [contactlist, setContactlist] = useState([{ id: 1, name: "Wen", email: "wen@gmail.com", phone: 111 }]);
    const [searchTerm, setsearchterm] = useState("");
    const [searcharr, setsearcharr] = useState([]);

    //useEffect to get data from file or local storage
    useEffect(() => {
        const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
        if (retrievedData) {
            setContactlist(retrievedData);
        }
        if (contactlist.length === 0) {
            console.log("in contactlist length ==0")
            setContactlist([{ id: 1, name: "Wen Lin", email: "Wen@gmail.com" }])
        }
        //shows contact list from local storage
        console.log("App data: ", contactlist)
    }, []);

    //useEffect to update data
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactlist))
    }, [contactlist]);

    //array from storing contacts
    /*let contactlist = [{ id: 1, name: "Wen", email: "wen@gmail.com", phone: 111 }];*/
    //function to add new contact to array of contact
    const addContactData = (contact) => {
        let newcontactlist = [...contactlist, { ...contact }];
        /*contactlist = newcontactlist;
        console.log(contactlist);*/
        setContactlist(newcontactlist);
        //prints the new list after a new contact is added
        console.log("new list after adding: ", contactlist)
    }

    const updateContactData = (contact) => {
        console.log("update Data");
        setContactlist(contactlist.map((p) => {
            return p.id === contact.id ? { ...contact } : p;
        }))
    }

    const searchHandler = (searchtext) => {
        setsearchterm(searchtext);
        if (searchTerm !== "") {
            const newlist = contactlist.filter((contact) => {
                console.log(Object.values);
                const str = Object.values(contact)
                    .join(" ")
                    .toLowerCase().includes(searchTerm);

            });
            setsearcharr(newlist);
        }
        else {
            setsearcharr(contactlist);
        }
    }

    const removeContactData = (id) => {
        console.log("this is id in app: ", id)
        const newlist = contactlist.filter((p) => {
            return p.id !== id;
        });
        setContactlist(newlist);
    }

    return (
    <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => <ContactFinder {...props}
                        contacts={searchTerm.length < 1 ? contactlist : searcharr}
                        searchText={searchTerm}
                        searchKeyword={searchHandler}
                        getContactId={removeContactData}
                    />} />
                    <Route path="/add" exact render={(props) => <AddContactDetails
                        {...props} addContactHandler={addContactData}
                    />} />
                    <Route path="/edit/:id" exact render={(props) => <EditContactDetails
                        {...props} updateContactHandler={updateContactData}
                    />}></Route>
                </Switch>
            </Router>
            {/* <AddContactDetails addContactHandler={addContactData} />
          <ContactFinder contacts={contactlist }/>
          <ContactCardList contacts={contactlist} />*/}
    </div>
   
  );
}

export default App;
