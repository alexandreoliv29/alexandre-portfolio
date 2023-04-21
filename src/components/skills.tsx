import React from "react";

export default function Skills() {
    return (
        <section className="skills">
            <div className="container">
                <h2 className="text-white">Habilidades</h2>
                <div className="cards">

                    <div className="d-flex justify-content-around">
                        <div className="box">
                            <h5 className="card-title">HTML5</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/html.svg" className="card-img-top" alt="HTML5" />
                        </div>
                        <div className="box">
                            <h5 className="card-title">CSS3</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/css.svg" className="card-img-top" alt="CSS3" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-around mt-5">
                        <div className="box">
                            <h5 className="card-title">ReactJS</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/react.svg" className="card-img-top" alt="HTML" />
                        </div>
                        <div className="box">
                            <h5 className="card-title">React Native</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/react.svg" className="card-img-top" alt="..." />
                        </div>
                    </div>


                    <div className="d-flex justify-content-around mt-5">
                        <div className="box">
                            <h5 className="card-title">JavaScript</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/javascript.svg" className="card-img-top" alt="HTML" />
                        </div>
                        <div className="box">
                            <h5 className="card-title">Material UI</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/materialui.svg" className="card-img-top" alt="..." />
                        </div>
                    </div>


                    <div className="d-flex justify-content-around mt-5">
                        <div className="box">
                            <h5 className="card-title">Redux</h5>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/redux.svg" className="card-img-top" alt="HTML" />
                        </div>
                        <div className="box">
                            <div className="card-body">
                                <h5 className="card-title">TypeScript</h5>
                            </div>
                            <img src="https://my-bucket-ale.s3.amazonaws.com/icons/typescript.svg" className="card-img-top" alt="..." />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}