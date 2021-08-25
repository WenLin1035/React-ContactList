import './App.css';
import Header from "./components/Header";
import AddContactDetails from "./components/AddContactDetails";
import ContactDetails from "./components/ContactDetails";
import { useState, useEffect } from 'react';

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
        console.log("hi");
    }
  return (
    <div className="App">
          <Header />
          <AddContactDetails addContactHandler={addContactData} />
          <ContactDetails contacts={contactlist}/>
    </div>
   
  );
}

export default App;
