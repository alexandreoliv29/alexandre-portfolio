import React from "react";

export default function Skills() {
    return (
        <section className="skills container">
            <div className="container">
                <h2 className="textWhiteSmall text-center mt-5">Habilidades</h2>

                <div className="cards mt-5 d-column">

                    <div className="d-flex gap-3">
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">HTML5</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/html.svg" className="card-img-top" alt="HTML5" />
                                <div className="purpleBar"></div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">CSS3</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/css.svg" className="card-img-top" alt="CSS3" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-3 mt-5">
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">ReactJS</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/react.svg" className="card-img-top" alt="HTML5" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="insideCard ">
                                <h5 className="textPurpleSmall">React Native</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/react.svg" className="card-img-top" alt="CSS3" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex gap-3 mt-5">
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">JavaScript</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/javascript.svg" className="card-img-top" alt="HTML" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">Material UI</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/materialui.svg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>


                    <div className="d-flex gap-3 mt-5">
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">Redux</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/redux.svg" className="card-img-top" alt="HTML" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="insideCard">
                                <h5 className="textPurpleSmall">TypeScript</h5>
                                <img src="https://my-bucket-ale.s3.amazonaws.com/icons/typescript.svg" className="card-img-top" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}