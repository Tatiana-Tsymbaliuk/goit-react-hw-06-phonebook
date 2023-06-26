
import React from 'react';
import { nanoid } from 'nanoid'
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {addContact} from './redux/taskSlice'

export default function App(){
  //const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
  // const [contacts, setContacts] = useState(parsedContacts)
  const {contacts} = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

const handleSubmit = data => {
  const newContacts ={
    id: nanoid(), 
    ...data 
  }
  
    const someContact = contacts.some(item=> item.name.toLowerCase() === data.name.toLowerCase())
      if (!someContact) {
        dispatch(addContact(newContacts));      
      } else{
      alert(`Name is already in contacts`);  }   
      }

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
      <ContactForm onSubmitForm={handleSubmit}/>
      <h2>Contacts</h2> 
      <Filter />
      <ContactList />
    </div>) 
    } 

