import React from 'react';
import SideBarHaji from "components/SideBarHaji";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow"; 
import {
    Breadcrumb, 
} from "react-bootstrap";
import SiapDanaHajiContent from "components/SiapDanaHajiContent";

const SiapDanaHaji = () => {
    return (
        <div className="row">
            <div className="col-2">
                <SideBarHaji />
            </div>
            <div className="col-lg-10">
                <div className="container">
                    <NavBar2 />
                     <SiapDanaHajiContent />
                </div>
            </div>
        </div>

    );
};
export default SiapDanaHaji;