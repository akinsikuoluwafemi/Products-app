import React from 'react';


function ContactCard (props) {
    console.log(props.contact)
    
    return (
        <div className="contact-card">
            <h3>{props.contact.name}</h3>
            <img src={props.contact.src} />
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div> 
        
    )
}

export default ContactCard;