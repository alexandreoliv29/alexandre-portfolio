import React from 'react'

export default function Header() {
    return (
        <div className="container d-column">
            <div className='d-flex justify-content-center'>
                <img className="headerImg" width={100} height={100} src="https://vinum-wine.s3.amazonaws.com/headerImg.jpg" alt="Ale" />
            </div>
            <div className="headerText d-column justify-content-center text-center">
                <p className='text-white'>Olá, eu sou o Alexandre Oliveira</p>
                <p className='text-white'>Desenvolvedor Full Stack</p>
            </div>
            <div className="headerButtons">
                <button type="button" id='buttonCV' className="btn">Download CV</button>
                <button type="button" id='buttonContact' className="btn">Entrar em contato</button>
            </div>



        </div>
    )
}