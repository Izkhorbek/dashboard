import React from "react";
import "./MessagesPage.css";
function MessagesPage() {
  return (
    <div className="messages-page">
      <h1 className="messages-page__title">
        FOYDALANUVHCHILARGA XABAR YUBORISH
      </h1>
      <div className="messages-page__container">
        <div className="messages-page__info">
          <div className="messages-page__info__container">
            {/* Inforrmation Row 1 */}
            <div className="messages__info__container-col-1">Harakat</div>
            <div className="messages__info__container-col-2">
              Foydalanuvchi ism-sharifi
            </div>
            <div className="messages__info__container-col-3">Turi</div>
            <div className="messages__info__container-col-4">ID raqami</div>
            {/* Inforrmation Row 2 */}
            <div className="messages__info__container-col-1-1">
              <input type="checkbox" />
            </div>
            <div className="messages__info__container-col-2-2">
              <input type="text" />
            </div>
            <div className="messages__info__container-col-3-3">
              <select name="" id="">
                <option value="">xizmat beruvchi</option>
                <option value="">xizmat oluvchi</option>
              </select>
            </div>
            <div className="messages__info__container-col-4-4">
              <input type="text" />
            </div>
          </div>
          {/* Shu yerga datalatni joylashtir */}
          <div className="clients-page__pagination">
            <h3>Sahifada jadvaldagi qatorlar soni</h3>
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
        <div className="messages-page__messanger">
          <select className="messages-page__select" id="">
            <option value="" defaultChecked>
              Xabar usuli
            </option>
            <option value="">Xabar usuli1</option>
            <option value="">Xabar usuli2</option>
          </select>
          <textarea
            className="messages-page__textarea"
            id="messages-page__textarea"
          ></textarea>
          <div className="messages-page__file">
            <label htmlFor="file" className="messages-page__file-label">
              File qo`shish{" "}
            </label>
            <input type="file" className="messages-page__choose__file"></input>
          </div>
          <button type="button" className="messages-page__button">
            Xabarni yuborish
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
