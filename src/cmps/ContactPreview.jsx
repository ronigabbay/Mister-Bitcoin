import React from 'react'
// import './RobotPreview.scss'
import { Link } from 'react-router-dom'
export function ContactPreview({ contact }) {


    return (

        <li className="conact-preview " >
            <Link className="flex align-center"  to={`/contact/${contact._id}`}>
                <img className="contact-img" src={"https://robohash.org/" + contact._id + "?set=set5" } />
                <h2>{contact.name} </h2>
                {/* <h3>{contact.phone}</h3> */}
            </Link>
        </li>

    )
}