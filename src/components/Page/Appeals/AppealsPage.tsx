import React from "react";
import "./AppealsPage.css";
function AppealsPage() {
  return (
    <div className="appeals-page">
      <h1 className="appeals__title">FOYDALANUVCHILARDAN KELGAN MUROJATLAR</h1>
      <div className="appeals__container">
        {/* Row 1 */}
        <div className="appeals__col-1">T/r</div>
        <div className="appeals__col-2">Murojatchi</div>
        <div className="appeals__col-3">ID raqam</div>
        <div className="appeals__col-4">Telefon raqam</div>
        <div className="appeals__col-5">Holat</div>
        <div className="appeals__col-6">Turi</div>
        <div className="appeals__col-7">Vaqt</div>
        {/* Row 2 */}
        <div className="appeals__col-1-1">
          <input type="text" />
        </div>
        <div className="appeals__col-2-2">
          <input type="text" />
        </div>
        <div className="appeals__col-3-3">
          <input type="text" />
        </div>
        <div className="appeals__col-4-4">
          <input type="text" />
        </div>
        <div className="appeals__col-5-5">
          <select>
            <option>Yangi</option>
            <option>O'qilgan</option>
            <option>Javob berilgan</option>
          </select>
        </div>
        <div className="appeals__col-6-6">
          <select>
            <option value="">Taklif</option>
            <option value="">Shikoyat</option>
          </select>
        </div>
        <div className="appeals__col-7-7">
          <input type="text"></input>
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

export default AppealsPage;
