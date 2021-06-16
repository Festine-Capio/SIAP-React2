import React from 'react';
import SideBarHaji from "components/SideBarHaji";
import NavBar2 from "components/NavbarBorrow"; 
import SiapDanaHajiFormContent from "components/SiapDanaHajiFormContent"; 


const SiapDanaHajiForm = () => {
    return (
        <div className="row">
            <div className="col-2">
                <SideBarHaji />
            </div>
            <div className="col-lg-10">
                <div className="container">
                    <NavBar2 />
                    <SiapDanaHajiFormContent />
                </div>
            </div>
        </div>

    );
};
export default SiapDanaHajiForm;