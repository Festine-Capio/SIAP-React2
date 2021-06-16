import React from 'react';
import SideBarHaji from "components/SideBarHaji";
import NavBar2 from "components/NavbarBorrow"; 
import SiapDanaHajiFormTwoContent from "components/SiapDanaHajiFormTwoContent"; 


const SiapDanaHajiFormTwo = () => {
    return (
        <div className="row">
            <div className="col-2">
                <SideBarHaji />
            </div>
            <div className="col-lg-10">
                <div className="container">
                    <NavBar2 />
                    <SiapDanaHajiFormTwoContent />
                </div>
            </div>
        </div>

    );
};
export default SiapDanaHajiFormTwo;