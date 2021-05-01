import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import Notif from "assets/images/notif3x.png";
import Flag from "assets/images/bendera.png";
import Profile from "assets/images/blank_profile.png";
import {
  Accordion,
  Card,
  ListGroup,
  Dropdown,
 Button,
} from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
const NavBarBorrow = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-7">
        <div className="form-group has-search2">
          <img src={Icon} alt="" className="form-control-feedback" />
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="col d-flex justify-content-end mt-4">
        <img src={Notif} alt="" style={{ width: "24px", height: "24px" }} />
      </div>
      <div className="col-sm-1 d-flex justify-content-center mt-4">
        <img src={Flag} alt="" className="flag" />
      </div>
      <div className="col d-flex justify-content-end">
        <Accordion className="prof-accor">
          <Card className="prof-accor">
            <Accordion.Toggle
              as={Card.Header}
              eventKey="0"
             
            >
              <div className="row">
                <div className="col-sm-4">
                  <img src={Profile} alt="mudah" className="profile-nav" />
                </div>
                <div className="col">
                  <div className="row">
                    <h6>Reynaldi gozali</h6>
                  </div>
                  <div className="row">
                    <span>+62894***</span>
                  </div>
                </div>
                <div className="col-sm-2 mt-3">
                  <FaChevronDown />
                </div>
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <ListGroup>
                <ListGroup.Item>Pofil</ListGroup.Item>
                <ListGroup.Item>Keluar</ListGroup.Item>
               
              </ListGroup>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};
export default NavBarBorrow;
