import React from "react";
import SideBar from "components/SideBar";
import Icon from "assets/images/search.png";
import NavBar2 from "components/NavbarBorrow";
import Detail from "assets/images/detailberita.png";
const HomeBorrower = () => {
  return (
    <div className="row">
      <div className="col">
        <SideBar />
      </div>
      <div className="col-lg-11">
        <div className="container">
          <NavBar2 />
          <div className="row">
            <div className="col">
              <h4>Kenali Lebih Jauh SIAP Investasi dan Dana</h4>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <img src={Detail} alt="" className="detailpic" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-8">
              <p className="detail-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repella
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBorrower;
