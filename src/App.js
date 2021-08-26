import './App.css';
import Header from "./components/Header";
import AddContactDetails from "./components/AddContactDetails";
//import ContactCardList from "./components/ContactCardList";
//import ContactDetails from "./components/ContactDetails";
import { useState, useEffect } from 'react';
import ContactFinder from './components/ContactFinder';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    //useEffect const
    const LOCAL_STORAGE_KEY = "contactlist";

    //useState const
    const [contactlist, setContactlist] = useState([{ id: 1, name: "Wen", email: "wen@gmail.com", phone: 111 }]);

    //useEffect to get data from file or local storage
    useEffect(() => {
        const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '')
        if (retrievedData) {
            setContactlist(retrievedData);
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
    return (
    <div className="App">
          <Header />
          <AddContactDetails addContactHandler={addContactData} />
          <ContactFinder contacts={contactlist }/>
          {/*<ContactCardList contacts={contactlist} />*/}
    </div>
   
  );
}

export default App;
