import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Exemplo de navegação para a página "/home"
        navigate('/login');
    };

    const handleSignUp = () => {
        // Exemplo de navegação para a página "/home"
        navigate('/cadastro');
    };

    return (
        <div className='navbar'>
            <p className='logo'> Notes Taking </p>

            <div className="button-section">
                <button onClick={handleLogin}> login </button>
                <button onClick={handleSignUp}> cadastro </button>
            </div>

        </div>
    )
}
