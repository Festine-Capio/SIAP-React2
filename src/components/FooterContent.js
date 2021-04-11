import React from "react";
import Logo from "assets/images/logo-color.png";
import MNC from "assets/images/mnc-group.png";
import Instagram from "assets/images/instagram.png";
import FaceBook from "assets/images/facebook.png";
import Youtube from "assets/images/youtube.png";
import Phone from "assets/images/phone.png";
import Amplop from "assets/images/amplop.png";
const FooterContent = () => {
    return (
      <footer>
        <div className="bg-default section-space80">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row mb-3">
                  <h5>Layanan</h5>
                </div>
                <div className="row">
                  <ul className="listnone">
                    <li>Pendanaan</li>
                    <li>Peminjaman</li>
                    <li>Pembiayaan Haji</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h5>Dukungan</h5>
                </div>
                <div className="row">
                  <ul className="listnone">
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Hubungi Kami</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h5>Informasi</h5>
                </div>
                <div className="row">
                  <ul className="listnone">
                    <li>SIAP Tahu</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h5>Legal</h5>
                </div>
                <div className="row">
                  <ul className="listnone">
                    <li>Disclaimer</li>
                    <li>Syarat dan Ketentuan</li>
                    <li>Kebijakan Privasi</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="row d-flex justify-content-end">
                  <h5 className="text-righ">PT SIAP</h5>
                </div>
                <div className="row ">
                  <ul className="listnone2">
                    <li>
                      <p>MNC Financial Center Building 21th Floor</p>
                    </li>
                    <li>Jl Kebon Sirih No. 21 – 27</li>
                    <li>Jakarta Pusat 10340</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div className="row">
                  <h5>Channel Resmi SIAP</h5>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-3">
                    <div className="row">
                      <img src={Instagram} className="contact-icon" alt="ig" />
                    </div>
                    <div className="row">
                      <p className="contact-font">Siapdanain</p>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="row">
                      <img src={FaceBook} className="contact-icon" alt="fb" />
                    </div>
                    <div className="row">
                      <p className="contact-font">Siapdanain</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <img src={Youtube} className="contact-icon" alt="yt" />
                    </div>
                    <div className="row">
                      <p className="contact-font">Siapdanain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <h5>Customer Care</h5>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-3">
                    <div className="row">
                      <img src={Phone} className="contact-icon" alt="ig" />
                    </div>
                    <div className="row">
                      <p className="contact-font">1500 899 ex 7</p>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="row mt-1 ml-4">
                      <img src={Amplop} className="contact-icon2" alt="yt" />
                    </div>
                    <div className="row mt-3">
                      <p className="contact-font">cs@siapdanain.id</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tiny-footer">
          <div class="container">
            <div class="row  align-items-center">
              <div class="col-sm-1">
                <img src={Logo} className="foo-logo" alt="logo" />
              </div>
              <div>
                <span>© 2021 PT. SIAP</span>
              </div>
              <div class="col mt-3 text-right">
                <p>Member OF</p>
              </div>
              <div class="col-sm-1 text-right">
                <img src={MNC} className="mnc-group" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};
export default FooterContent;
