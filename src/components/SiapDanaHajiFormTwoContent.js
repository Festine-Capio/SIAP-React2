import React from "react";
import BgSiapHaji from 'assets/images/siap-haji/siap-haji.png';
import { Form } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const SiapDanaHajiFormContent = () => {
    return (
        <div className="bigcard mt-3">
            <div className="row">
                <div className="col-1">
                    <FaArrowLeft />
                </div>
                <div className="col-11 header-bigcard">
                    <h4>Pendaftaran SIAP Haji</h4>
                    <span>Form untuk melakukan pendaftaran</span>
                </div>
            </div> 

            <div className="row mt-4 justify-content-center">
                <div className="col-5 select">
                    <h5>Pilih Area Tempat Tinggal Anda</h5>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                label={`Jakarta, Bandung, Semarang, Surabaya, Medan, Pekanbaru, Palembang, Bali, Makasar, Balikpapan, Pontianak, Banjarmasin`}
                                id={`disabled-default-${type}`}
                            />
                            <div className="mt-3"></div>
                            <Form.Check
                                type={type}
                                label={
                                    <Form.Control as="select" style={{width: "400px"}}>
                                        <option>Lainnya</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                }
                                id={`disabled-default-${type}`}
                            />
                            </div>
                        ))}
                    </Form>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-5">
                    <button className="btn btn-next btn-block">
                        Lanjut
                    </button>
                </div>
            </div>
             
        </div>
    )
};
export default SiapDanaHajiFormContent;