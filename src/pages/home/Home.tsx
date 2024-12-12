import React from 'react'
import './home.css'


export default function Home() {
    return (
        <div className='container'>
            <div className="navbar">
                <img src="./logo.png"
                    className='logo' />

                <div className="links-section">
                    <p className='links'> Home </p>
                    <p className='links'> Sobre </p>
                    <p className='links'> Ajuda </p>
                    <p className='links'> Contato </p>
                </div>

                <div className="button-section">
                    <button className='login'>
                        login
                    </button>
                    <button className='login'>
                        cadastro
                    </button>
                </div>


            </div>
        </div>
    )
}
