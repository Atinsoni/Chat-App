import React, { useState } from 'react'
import axios from 'axios';

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID':"61f0bf7c-83b6-4711-8585-bdb080454d6c", 'User-Name':username, 'User-Secret':password}
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
      
            window.location.reload();
            setError('');
        } 
        catch (error) {
            setError('Oops, incorrect credentials.');
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align="center">
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h2>{error}</h2>
            </div>
        </div>
    )
}

export default LoginForm