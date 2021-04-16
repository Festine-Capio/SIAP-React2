import React, { useContext } from "react";
import { ListGroup, Nav, Col, Tab, Row, Dropdown } from "react-bootstrap";
import Logo from "assets/images/siap.png";


const SideBar = () => {
  return (
    <Nav
      className="flex-column sidenav"
      style={{
        backgroundColor: "#E6E6FA",
      }}
    >
      <div className="row d-flex justify-content-center mt-5">
        <img src={Logo} alt="logo" className="logosidnav" />
      </div>

      <div className="row ml-1 mt-5">
        <div className="col">
          <p>Jenis Akun</p>
        </div>
      </div>
      <div className="row ml-1">
        <h5>Borrower</h5>
      </div>

      <Nav.Link className="row pl-5">
        <div className="row"></div>
      </Nav.Link>
      <div className="row pl-5 mt-4 mb-4">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Link 2
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Nav>
  );
};

export default SideBar;
