// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const itemContact = props.data
    return (
        <div className='card-contact'>
            <div className='card-body-contact' >
                <img src={itemContact.photo} className="imgBorder" alt=''></img>
                <div className='card-text'>
                    <div><b>{itemContact.name}</b></div>
                    <div>{itemContact.email}</div>
                    <div>{itemContact.phone}</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;