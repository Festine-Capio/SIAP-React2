import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

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

            <div className="row mt-3">
                <div className="container-fluid">
                    <div className="col-12">
                    <table class="table bg-white">  
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Tanggal Lahir</th>
                                <th scope="col">Tenor</th>
                                <th scope="col">Status</th>
                                <th scope="col" className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>MNC Group</td>
                                <td>19/02/1987</td>
                                <td>5 Tahun - Rp. 5000.000</td>
                                <td>Penjamin dan Nasabah</td>
                                <td>
                                    <a href="" className="p-3">
                                        <FaPencilAlt />
                                    </a>
                                    <a href="" className="p-3">
                                        <FaTrashAlt />
                                    </a>
                                    
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>MNC Group</td>
                                <td>19/02/1987</td>
                                <td>5 Tahun - Rp. 5000.000</td>
                                <td>Penjamin dan Nasabah</td>
                                <td>
                                    <a href="" className="p-3">
                                        <FaPencilAlt />
                                    </a>
                                    <a href="" className="p-3">
                                        <FaTrashAlt />
                                    </a>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="5" className="py-4"></td>
                                <td className="text-center">
                                    <a href="">
                                        <FaPlusCircle />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

            <div className="roW justify-content-center">
                <div className="col-6 offset-3 mt-2">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Peserta Haji yang ikut sudah lengkap</label>
                    </div>
                </div>
                <div className="col-7 offset-3 mt-2">
                    <span>* dengan ini menyetujui untuk melakukan pengajuan pembiayaan melalui SIAP Haji. <br />
                        Semua Informasi yang dilengkapi adalah benar dan seusai
                    </span>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-4">
                    <button className="btn btn-back btn-block">
                        Simpan dan teruskan nanti
                    </button>                  
                </div>
                <div className="col-4">
                    <button className="btn btn-next btn-block" data-toggle="modal" data-target="#exampleModal">
                        Lanjut
                    </button>
                </div>
            </div>
        
        </div>
        
    )
};
export default SiapDanaHajiFormContent;