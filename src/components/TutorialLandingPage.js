import React from 'react'
import Iphone from '../assets/images/i-phone-12-pro_2021-06-30/i-phone-12-pro.png'

const TutorialLandingPage = () => {
    return (
        <div className="container">
            <div className="row tutorial mt-5">
                <div className="col-12">
                    <h5>Tutorial</h5>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-8">
                    <h3>Simulasi Tutorial <br /> SIAP</h3>

                    <div className="row mt-4">
                        <div className="col-2">
                            <h3>01</h3>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-list">Daftar Masuk Aplikasi</a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-2">
                            <h3>02</h3>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-list">Lorem ipsum, dolor sit</a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-2">
                            <h3>03</h3>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-list">Lorem ipsum, dolor sit</a>
                        </div>
                    </div>
                    

                    <div className="row mt-4">
                        <div className="col-2">
                            <h3>04</h3>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-list">Lorem ipsum, dolor sit</a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-2">
                            <h3>05</h3>
                        </div>
                        <div className="col">
                            <a href="" className="btn btn-list">Lorem ipsum, dolor sit</a>
                        </div>
                    </div>


                </div>

                <div className="col">
                    <img src={Iphone} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default TutorialLandingPage
