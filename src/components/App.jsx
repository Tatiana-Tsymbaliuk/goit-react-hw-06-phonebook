
import React from 'react';
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';



export default function App(){
  //const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  // const [contacts, setContacts] = useState(parsedContacts)
  // const {contacts} = useSelector(state => state.phonebook);
  // const dispatch = useDispatch();

// const handleSubmit = data => {
//   const newContacts ={
//     id: nanoid(), 
//     ...data 
//   }
  
//     const someContact = contacts.some(item=> item.name.toLowerCase() === data.name.toLowerCase())
//       if (!someContact) {
//         dispatch(addContact(newContacts));      
//       } else{
//       alert(`Name is already in contacts`);  }   
//       }

    // const changeFilter =(e)=>{
    //   setFilter(e.currentTarget.value)
    // } 

    // const deleteTodo = (todoId) =>{
    //   setContacts(prevState =>(
    //   prevState.filter(contact=>contact.id !== todoId)
    // ));}

  //   useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
      
    //     const getVisibleContacts=()=>{   
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
    //     }
   
    // const visibleContacts = getVisibleContacts()
    return (<div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2> 
      <Filter />
      <ContactList />
    </div>) 
    } 

