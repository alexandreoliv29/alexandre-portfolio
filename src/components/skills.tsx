import React from "react";

export default function Skills() {
    return (
        <div className="container d-column justify-content-center text-center">
            <h3 className="text-white">Habilidades</h3>

            <div className="card-group d-flex justify-content-center space-between">
                <div className="card">
                    <img src="https://my-bucket-ale.s3.amazonaws.com/icons/html.svg" className="card-img-top" alt="HTML5" width={50} height={50} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://my-bucket-ale.s3.amazonaws.com/icons/css.svg" className="card-img-top" alt="CSS3"  width={50} height={50}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src="https://my-bucket-ale.s3.amazonaws.com/icons/html.svg" className="card-img-top" alt="HTML" width={50} height={50} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." width={50} height={50}  />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}