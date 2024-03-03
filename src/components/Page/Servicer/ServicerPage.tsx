import React from "react";
import "./ServicerPage.css";
function ServicerPage() {
  return (
    <div className="servicer-page">
      <h2 className="servicer-page_title">
        FOYDALANUVCHILAR - XIZMAT BERUVCHILAR
      </h2>
      <div className="servicer-page__container">
        <div className="servicer-col-1">
          <span>Surati</span>
        </div>
        <div className="servicer-col-2">ID raqami</div>
        <div className="servicer-col-2--1">
          <input type="text" className=""></input>
        </div>
        <div className="servicer-col-3">Ismi</div>
        <div className="servicer-col-3--1">
          <input type="text" className=""></input>
        </div>
        <div className="servicer-col-4">Familiyasi</div>
        <div className="servicer-col-4--1">
          <input type="text" className=""></input>
        </div>
        <div className="servicer-col-5 ">Kasbi</div>
        <div className="servicer-col-5--1">
          <input className=""></input>
        </div>
        <div className="servicer-col-6 ">Telefon raqami</div>
        <div className="servicer-col-6--1">
          <input className=""></input>
        </div>
        <div className="servicer-col-7 ">Holati</div>
        <div className="servicer-col-7--1">
          <select className="">
            <option>Aktiv</option>
            <option>Noaktiv</option>
          </select>
        </div>
        <div className="servicer-col-8 ">Maqomi</div>
        <div className="servicer-col-8--1">
          <select className="">
            <option>Premium</option>
            <option>Oddiy</option>
          </select>
        </div>
      </div>
      <div className="servicer-page-info__container">
        <div className="servicer-col-1">Surati</div>
        <div className="servicer-col-2--1">dff</div>
        <div className="servicer-col-3--1">Name</div>
        <div className="servicer-col-4--1">SurName</div>
        <div className="servicer-col-5--1">Occupation</div>
        <div className="servicer-col-6--1">+998905231648</div>
        <div className="servicer-col-7--1">
          <select className="">
            <option>Aktiv</option>
            <option>Noaktiv</option>
          </select>
        </div>
        <div className="servicer-col-8--1">
          <select className="">
            <option>Premium</option>
            <option>Oddiy</option>
          </select>
        </div>
      </div>
      <div className="servicer-page__pagination">
        <h3>Qatorlar soni</h3>
        <select className="pagination">
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
    </div>
  );
}

export default ServicerPage;
