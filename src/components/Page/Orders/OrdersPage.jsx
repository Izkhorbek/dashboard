import React from "react";
import "./OrdersPage.css";
function OrdersPage() {
  return (
    <div>
      <div className="orders">
        <h1 className="orders__title">
          Amalga oshirilgan buruytmalar ro'yxati
        </h1>
        <div className="orders__container">
          {/* Row 1 */}
          <div className="orders__col-1">
            <br />
            T/r
          </div>
          <div className="orders__col-2">Xizmat beruvchilar</div>
          <div className="orders__col-3">Xizmat oluvchilar</div>
          <div className="orders__col-4">Xizmat turi</div>
          <div className="orders__col-5">Vaqti</div>
          {/* Row 2 */}
          <div className="orders__col-2-1">Ism, sharifi</div>
          <div className="orders__col-2-2">ID raqami</div>
          <div className="orders__col-2-3">Telefon raqami</div>
          <div className="orders__col-3-1">Ism, sharifi</div>
          <div className="orders__col-3-2">ID raqami</div>
          <div className="orders__col-3-3">Telefon raqami</div>
          {/* Row 3 */}
          <div className="orders__col-2-1-1">
            <input text="text" id="servicer__fullName" className=""></input>
          </div>
          <div className="orders__col-2-2-2">
            <input type="text" id="servicer__Id" className="" />
          </div>
          <div className="orders__col-2-3-3">
            <input type="text" id="servicer__phone" className="" />
          </div>
          <div className="orders__col-3-1-4">
            <input text="text" id="client__fullName" className=""></input>
          </div>
          <div className="orders__col-3-2-5">
            <input type="text" id="client__Id" className="" />
          </div>
          <div className="orders__col-3-3-6">
            <input type="text" id="client__phone" className="" />
          </div>
          <div className="orders__col-4-7">
            <input type="text" id="orders_type" className="" />
          </div>
          <div className="orders__col-5-8">
            <input type="text" id="orders_time" className="" />
          </div>
        </div>
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
    </div>
  );
}

export default OrdersPage;
