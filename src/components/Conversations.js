import React              from 'react';
import {ListGroup}        from "react-bootstrap";
import {useConversations} from "../context/ConversationsProvider";

const Conversations = () => {
    const {conversations,selectConversations} = useConversations()
    return (
        <ListGroup variant={"flush"}>
            {conversations.map((conversation, index) => (
                <ListGroup.Item eventKey={index} key={index} action active={conversation.selected} onClick={()=>selectConversations}>
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>))}
        </ListGroup>
    );
};

export default Conversations;