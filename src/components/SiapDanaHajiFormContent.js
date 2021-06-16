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
                    <h5>Angsuran & Jangka Waktu Pembayaran</h5>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Angsuran & Jangka Waktu</Form.Label>
                            <Form.Control as="select">
                                <option>Pilih Kota</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                         </Form.Group>
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