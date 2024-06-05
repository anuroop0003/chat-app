import React, { useState, useEffect } from 'react'

const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on("activeUsers", data => setUsers(data.data))
    }, [socket, users]);

    console.log("users",users);

    return (
        <div className='chat__sidebar'>
            <h2>Open Chat</h2>
            <div>
                <h4 className='chat__header'>ACTIVE USERS</h4>
                <div className='chat__users'>
                    {(users).map(user => <p key={user}>{user}</p>)}
                </div>
            </div>
        </div>
    )
}

export default ChatBar