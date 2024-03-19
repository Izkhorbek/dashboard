import React from "react";
import "./DetailsPage.css";
function DetailsPage() {
  return (
    <div className="details-page">
      <h1 className="details-page__title">
        Foydalanuvchilar - xizmat beruvchilar - Name and Surname
      </h1>
      <div className="details-page__container">
        <div className="details-page__image">
          <div>Surati</div>
          <div>Rasm</div>
        </div>
        <div className="details-page__id">
          <div>ID raqam</div>
          <div>Id</div>
        </div>
        <div className="details-page__name">
          <div>Ismi</div>
          <div>Alisher</div>
        </div>
        <div className="details-page__surname">
          <div>Familiyasi</div>
          <div>Artikov</div>
        </div>
        <div className="details-page__occupation">
          <div>ID raqam</div>
          <div>Id</div>
        </div>
        <div className="details-page__phone">
          <div>Telefon raqami</div>
          <div>+99890 999 99 99</div>
        </div>
        <div className="details-page__state">
          <div>Holati</div>
          <div>
            <select name="" id="details-page__state_select">
              <option value="">Aktiv</option>
              <option value="">Noaktiv</option>
            </select>
          </div>
        </div>
        <div className="details-page__status">
          <div>Maqomi</div>
          <div>
            <select name="" id="details-page__state_select">
              <option value="">Oddiy</option>
              <option value="">Premium</option>
            </select>
          </div>
        </div>
        <div className="details-page__location">
          <div>Geojoylashuv</div>
          <div>Map</div>
        </div>
        <div className="details-page__workingtime">
          <div>Ish vaqti</div>
          <div>Time</div>
        </div>
        <div className="details-page__photo">
          <div>Fotosuratlar</div>
          <div>rasmlar</div>
        </div>
        <div className="details-page__permistions">
          <div>Ruxsatnomalar</div>
          <div>rasmlar</div>
        </div>
        <div className="details-page__additions">
          <div>Qo'shimcha xujjatlar</div>
          <div>rasmlar</div>
        </div>
        <div className="details-page__services">
          <div>Xizmatlar</div>
          <div>Ukladka (80 000som), Soch bo'yash</div>
        </div>
        <div className="details-page__orders">
          <div>Buyurtmalar</div>
          <div>5</div>
        </div>
        <div className="details-page__comments">
          <div>Sharhlar</div>
          <div>5</div>
        </div>
        <div className="details-page__activedevice">
          <div>Faol qurilmalar</div>
          <div>1</div>
        </div>
        <div className="details-page__blacklist">
          <div>Qora ro`yxat</div>
          <div>0</div>
        </div>
        <div className="details-page__language">
          <div>Foydalanish tili</div>
          <div>
            <select name="" id="">
              <option value="">o'zbek</option>
              <option value="">rus tili</option>
            </select>
          </div>
        </div>
        <div className="details-page__inform">
          <div>Xabardor qilish</div>
          <div>
            <select name="" id="">
              <option value="">5 daqiqa</option>
              <option value="">10 daqiqa</option>
            </select>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default DetailsPage;
