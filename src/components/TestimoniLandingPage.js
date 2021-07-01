import React from 'react';
import { Carousel } from "react-bootstrap";


const TestimoniLandingPage = () => {
    return (
        <div className="container">
           <div className="row testimoni mt-5">
               <div className="col-12 text-center">
                   <h5>Testimoni</h5>
               </div>
               <div className="col-12 text-center">
                   <h4>Pendapat Mereka Tentang SIAP</h4>
               </div>
           </div>

           <div className="row mt-3 justify-content-center">
               <div className="col-10">
                  <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{width:"400px",height:"400px"}}
                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-mu6-ake6324-chim-l.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7edc252958c9c6b9cea5379443d6ac46"
                        alt="First slide"
                        />

                        <div className="row mt-3 justify-content-center">
                            <div className="col-9">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quaerat itaque repellendus, atque deleniti nostrum enim iure quo rerum! Dolorem?</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{width:"400px",height:"400px"}}
                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-mu6-ake6324-chim-l.jpg?w=800&dpr=1&fit=default&crop=default&auto=format&fm=pjpg&q=75&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7edc252958c9c6b9cea5379443d6ac46"
                        alt="Third slide"
                        />

                    <div className="row mt-3 justify-content-center">
                            <div className="col-9">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quaerat itaque repellendus, atque deleniti nostrum enim iure quo rerum! Dolorem?</p>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="embed-responsive embed-responsive-16by9"  style={{height:"400px"}}>
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>

                    <div className="row mt-3 justify-content-center">
                            <div className="col-9">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quaerat itaque repellendus, atque deleniti nostrum enim iure quo rerum! Dolorem?</p>
                            </div>
                        </div>

                    </Carousel.Item>
                    </Carousel>
               </div>
           </div>
        </div>
    )
}

export default TestimoniLandingPage
