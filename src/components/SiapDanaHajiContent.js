import React from "react";
import BgSiapHaji from 'assets/images/siap-haji/siap-haji.png';
import { Accordion, Card, ListGroup, Dropdown, Button }
 from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const SiapDanaHajiContent = () => {
    return (
        <div className="bigcard mt-3">
            <div className="row">
                <div className="col-1">
                    <FaArrowLeft />
                </div>
                <div className="col-11">
                    <h4>SIAP Dana Haji</h4>
                </div>
            </div> 
            <div className="row">
                <div className="col-7 mt-3">
                    <img src={BgSiapHaji} alt="sh" className="bg-siaphaji  " />
                    <h2 className="mt-4">Kembangkan Danamu</h2>
                        <p className="text-justify mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laboriosam officia aliquam iure nemo, reiciendis maiores sed explicabo voluptates similique dolore quidem accusamus exercitationem pariatur est eligendi architecto enim incidunt provident nobis tenetur dolor esse fugiat. Vero ipsa animi totam quo iusto earum laudantium blanditiis voluptatem maiores laboriosam ea cumque inventore corrupti magnam, quas ab aliquid dolores omnis architecto commodi soluta voluptates qui? Officia sint, unde non sequi tempore sed inventore atque quibusdam consequuntur perferendis ut reprehenderit a officiis modi id placeat delectus nulla illo ullam et aliquid fugit nihil doloremque velit. Odit veniam maxime rem officia, enim tempore aperiam.</p>
                </div>
                <div className="col mt-3">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <div className="row">
                                    <div className="col-10">
                                        Kenapa SIAP Dana Haji
                                    </div>
                                    <div className="col">
                                         <FaAngleUp />
                                    </div>
                                </div>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt illo cumque ipsam, maxime delectus. Consequatur neque, voluptate nesciunt facilis quo labore earum itaque quos magnam corrupti. Dolor, a quae!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nam.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <div className="row">
                                    <div className="col-10">
                                        Dokumen apa yang harus dipersiapkan
                                    </div>
                                    <div className="col">
                                         <FaAngleUp />
                                    </div>
                                </div>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sunt illo cumque ipsam, maxime delectus. Consequatur neque, voluptate nesciunt facilis quo labore earum itaque quos magnam corrupti. Dolor, a quae!, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, nam.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>

                <button className="btn btn-dana mt-3 py-3 btn-block">
                    Ajukan dana sekarang
                </button>
                </div>
            </div>    
        </div>
    )
};
export default SiapDanaHajiContent;