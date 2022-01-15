import React              from 'react';
import Sidebar            from "./Sidebar";
import OpenConversations  from "./OpenConversations";
import {useConversations} from "../context/ConversationsProvider";

const Dashboard = ({id}) => {
    const {selectedConversation} =useConversations()
    return (
        <div className={'d-flex'} style={{height:'100vh'}}>
            <Sidebar id={id}/>
            {selectedConversation && <OpenConversations/>}
        </div>
    );
};

export default Dashboard;