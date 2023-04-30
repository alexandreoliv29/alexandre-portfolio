

export default function Footer() {
    return (
        <>
            <section>
                <div className="container">
                    <div>
                        <h2 className="textWhiteSmall text-center mt-5">Contatos</h2>
                    </div>

                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            <div className="email">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="text">
                                    <p className="poppinsWhiteSmall">E-mail</p>
                                    <p>alexandre.foj@gmail.com</p>
                                </div>
                            </div>

                            <div className="linkedin">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="text">
                                    <p className="poppinsWhiteSmall">Linkedin</p>
                                    <p>@alexandreoliv_</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="telefone">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="text">
                                    <p className="poppinsWhiteSmall">Telefone</p>
                                    <p>(61) 98210-6396</p>
                                </div>
                            </div>

                            <div className="github">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="text">
                                    <p className="poppinsWhiteSmall">Github</p>
                                    <p>@alexandreoliv29</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}