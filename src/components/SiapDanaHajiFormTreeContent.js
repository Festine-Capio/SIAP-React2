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
                    <h5>Rencana Berangkat Haji</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        <label class="form-check-label" for="exampleRadios1">
                            Saya berangkat ibadah Haji Sendiri
                        </label>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                            Saya berangkat ibadah Haji bersama keluarga <br /> (saya bertindak sebagai penjamin)
                        </label>
                    </div>
                     <div class="form-check mt-3">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                        <label class="form-check-label" for="exampleRadios3">
                            Saya tidak ikut berangkat ibadah Haji bersama keluarga (Saya bertindak sebagai penjamain)
                        </label>
                    </div>

                      <div class="form-group mt-3">
                        <label for="exampleFormControlSelect1">Jumlah Peserta Haji (Termasuk Anda jika ikut ibadah)</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
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