import './App.css';
import Header from "./components/Header";
import AddContactDetails from "./components/AddContactDetails";
import ContactDetails from "./components/ContactDetails";

function App() {
  //array from storing contacts
    let contactlist = [{ id: 1, name: "Wen", email: "wen@gmail.com", phone: 111 }];
    //function to add new contact to array of contact
    const addContactData = (contact) => {
        let newcontactlist = [...contactlist, { ...contact }];
        contactlist = newcontactlist;
        console.log(contactlist);
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
