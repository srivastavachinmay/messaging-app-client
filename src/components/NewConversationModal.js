import React, {useState}     from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts}         from "../context/ContactsProvider";
import {useConversations}    from "../context/ConversationsProvider";

const NewConversationModal = ({closeModal}) => {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    function handleSubmit(e) {
        e.preventDefault()
        // createContact(idRef.current.value, nameRef.current.value)
        createConversation(selectedContactIds)
        closeModal()
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContact => {
            if (prevSelectedContact.includes(contactId)) {
                return prevSelectedContact.filter(prevId => {
                    return contactId !== prevId
                })

            } else {
                return [...prevSelectedContact, contactId]
            }
        })
    }

    return (
        <>
            <Modal.Header closeButton={closeModal}>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (<Form.Group controlId={contact.id} key={contact.id}>
                        <Form.Check type={"checkbox"} value={selectedContactIds.includes(contact.id)}
                                    label={contact.name} onChange={() => handleCheckboxChange(contact.id)}/>

                    </Form.Group>))}
                    <Button type={"submit"} onClick={handleSubmit}>Create</Button>

                </Form>
            </Modal.Body>

        </>
    )
        ;
};

export default NewConversationModal;