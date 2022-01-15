import React, {useState}                                       from 'react';
import {Nav, TabPane, TabContent, TabContainer, Button, Modal} from "react-bootstrap";
import Conversations                                           from "./Conversations";
import Contacts                                                from "./Contacts";
import NewConversationModal                                    from "./NewConversationModal";
import NewContactModal                                         from "./NewContactModal";

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationOpen = activeKey === CONVERSATIONS_KEY

    const [modalOpen, setModalOpen] = useState(false)

    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{width: '250px'}} className={'d-flex flex-column'}>
            <TabContainer activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant={'tabs'} className={'justify-content-center '}>
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent as={'div'} className={'border-end overflow-auto flex-grow-1'}>
                    <TabPane eventKey={CONVERSATIONS_KEY}>
                        <Conversations/>
                    </TabPane>
                    <TabPane eventKey={CONTACTS_KEY}>
                        <Contacts/>
                    </TabPane>
                </TabContent>
                <div className={"p-2 border-top border-end small"}>
                    Your id: <span className={'text-muted'}>{id}</span>
                </div>
                <Button onClick={()=> setModalOpen(true)} className={"rounded-0"}>
                    New {conversationOpen ? "Conversation" : "Contact"}
                </Button>
            </TabContainer>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationOpen ?
                 <NewConversationModal closeModal={closeModal}/> :
                 <NewContactModal closeModal={closeModal}/>}
            </Modal>
        </div>
    );
};

export default Sidebar;