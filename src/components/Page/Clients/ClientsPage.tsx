import React from "react";
import "./ClientsPage.css";
import "../../../common-styles/common-styles.css";
import { useNavigate } from "react-router-dom";
function ClientsPage() {
  const navigate = useNavigate();
  return (
    <div className="clients-page">
      <h2 className="clients-page_title">
        FOYDALANUVCHILAR - XIZMAT OLUVCHILAR
      </h2>
      <div className="clients-page__container">
        <div className="clients-col-1">ID raqam</div>
        <div className="clients-col-1--1">
          <input type="text" className=""></input>
        </div>
        <div className="clients-col-2">Ism</div>
        <div className="clients-col-2--1">
          <input type="text" className=""></input>
        </div>
        <div className="clients-col-3">Familiya</div>
        <div className="clients-col-3--1">
          <input type="text" className=""></input>
        </div>
        <div className="clients-col-4">Buyurtmalar</div>
        <div className="clients-col-4--1">
          <input className=""></input>
        </div>
        <div className="clients-col-5">Faol/Qurilma</div>
        <div className="clients-col-5--1">
          <input className=""></input>
        </div>
        <div className="clients-col-6">Telefon raqam</div>
        <div className="clients-col-6--1">
          <input className=""></input>
        </div>
        <div className="clients-col-7">Holat</div>
        <div className="clients-col-7--1">
          <select className="">
            <option>Aktiv</option>
            <option>Noaktiv</option>
          </select>
        </div>
        <div className="clients-col-8 ">Foydalanish tili</div>
        <div className="clients-col-8--1">
          <select className="">
            <option>Aktiv</option>
            <option>Noaktiv</option>
          </select>
        </div>
        <div className="clients-col-9">Xabardor qilish</div>
        <div className="clients-col-9--1">
          <select className="">
            <option>5 daqiqa oldin</option>
            <option>10 daqiqa oldin</option>
          </select>
        </div>
      </div>
      {/* use map here */}
      <div className="clients-page-info__container bg-white">
        <div className="clients-col-1--1">546548</div>
        <div className="clients-col-2--1">Ibrohim </div>
        <div className="clients-col-3--1">Karimov</div>
        <div className="clients-col-4--1 clients-orders">15</div>
        <div className="clients-col-5--1 clients-active-device">2</div>
        <div className="clients-col-6--1">+998905874514</div>
        <div className="clients-col-7--1">
          <select className="">
            <option>Aktiv</option>
            <option>Noaktiv</option>
          </select>
        </div>
        <div className="clients-col-8--1">
          <select className="">
            <option>O`zbekcha</option>
            <option>Ruscha</option>
            <option>Krilcha</option>
          </select>
        </div>
        <div className="clients-col-9--1">
          <select className="">
            <option>5 daqiqa oldin</option>
            <option>10 daqiqa oldin</option>
          </select>
        </div>
      </div>
      <div className="clients-page__pagination">
        <h3>Qatorlar soni</h3>
        <select>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
        <button className="clients-previous">Previous</button>
        <span>1/2</span>
        <button className="clients-next">Next</button>
      </div>
    </div>
  );
}

export default ClientsPage;
