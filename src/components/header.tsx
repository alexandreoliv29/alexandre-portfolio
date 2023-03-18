import * as React from 'react';

export default function Header() {
    return (
        <div className="container d-column">
            <div className='d-flex justify-content-center'>
                <img className="headerImg" width={100} height={100} src="https://my-bucket-ale.s3.amazonaws.com/headerImg.jpg" alt="Ale" />
            </div>
            <div className="headerText d-column justify-content-center text-center">
                <p className='title'>Olá, eu sou o </p>
                <p className='titleBlue'>Alexandre Oliveira</p>
                <p className='text'>Desenvolvedor Full Stack</p>
            </div>
            <div className="d-flex flex-column justify-content-center gap-3 px-4">
                <button type="button" id='buttonCV' className="btn">Download CV</button>
                <button type="button" id='buttonContact' className="btn">Entrar em contato</button>
            </div>



        </div>
    )
}