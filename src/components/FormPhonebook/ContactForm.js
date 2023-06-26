import React, {useState} from 'react';
import './ContactForm.css'
import { useDispatch } from 'react-redux';
import {addContact} from '../redux/taskSlice'

export default function ContactForm(){

const [name, setName] = useState("");
const [number, setNumber] = useState("");

const dispatch = useDispatch();
const handelChange = (e) =>{
  const { name, value} = e.currentTarget;
  switch(name){
    case "name":
    setName(value);
    break;
    case "number":
    setNumber(value);
    break;
    default: return; 
  }
 
}
   const handelSubmitForm=(e)=>{
    e.preventDefault();
    //onSubmitForm({name, number});
    dispatch(addContact({name, number})) 
    setName("");
    setNumber("");
     
   }     
 
       return( 
     <form onSubmit={handelSubmitForm} className='formData'>
            <label className='formDataLabel'>Name
               <input
      className='formDataInput'
      type="text"
      name="name"
      value={name}
      onChange={handelChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
            </label>
            <label className='formDataLabel'>Number
            <input
  className='formDataInput'
  type="tel"
  name="number"
  value={number}
  onChange={handelChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
           <button type='submit' className='formDataBtn'>Add contact</button> 
            </form> 
     )}



// import React from 'react';
// import './ContactForm.css'

// export default class ContactForm extends React.Component{
// state={
//   name: '',
//   number: '',
// }

// handelChange = (e) =>{
//   const { name, value} = e.target;
//   this.setState({ [name]: value });  
// }
//    handelSubmitForm=(e)=>{
//     e.preventDefault();
//     this.props.onSubmitForm(this.state);
//     this.setState({ name: "", number: "" });
//    }     
//  render(){  

//    const {name, number}=this.state
//        return( 
//      <form onSubmit={this.handelSubmitForm} className='formData'>
//             <label className='formDataLabel'>Name
//                <input
//       className='formDataInput'
//       type="text"
//       name="name"
//       value={name}
//       onChange={this.handelChange}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//             </label>
//             <label className='formDataLabel'>Number
//             <input
//   className='formDataInput'
//   type="tel"
//   name="number"
//   value={number}
//   onChange={this.handelChange}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//             </label>
//            <button type='submit' className='formDataBtn'>Add contact</button> 
//             </form> 
//      )}
// }
