import React                      from 'react';
import {useContacts}              from "../context/ContactsProvider";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const Contacts = () => {
    const {contacts} = useContacts()
    return (
        <ListGroup variant={"flush"}>
            {contacts.map(
                contact => (
                    <ListGroup.Item eventKey={contact.id} key={contact.id}>
                        {contact.name}
                    </ListGroup.Item>))}
        </ListGroup>
    );
};

export default Contacts;