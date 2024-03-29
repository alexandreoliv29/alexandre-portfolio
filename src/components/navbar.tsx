import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Alexandre Oliveira</a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-regular fa-bars-staggered fa-flip"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Linkedin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Sobre mim</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


