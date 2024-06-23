import React, { useEffect, useState } from "react";
import { useGetAllUserOrdersQuery } from "../../../Apis/userOrderApi";
import { IOrdersInfo } from "../../../Interface/IOrdersInfo";
import MainLoader from "../../MainLoader/MainLoader";
import "./OrdersPage.css";
function OrdersPage() {
  const [userOrders, setUserOrders] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const [pageOption, setPageOption] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const [currentPageSize, setCurrentPageSize] = useState(pageOption.pageSize);

  const { data, isLoading } = useGetAllUserOrdersQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  useEffect(() => {
    if (data) {
      setUserOrders(data.apiResponse.Result);
      const { TotalPages } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalPages);
    }
  }, [data]);

  //Handle pageSize changing
  const handleOptionChange = (pageSize: number): void => {
    if (pageSize) {
      setCurrentPageSize(pageSize);
      setPageOption({
        pageNumber: pageOption.pageNumber,
        pageSize: pageSize,
      });
    }
  };

  const handlebtnPrev = (): void => {
    setPageOption({
      pageNumber:
        pageOption.pageNumber === 1
          ? pageOption.pageNumber
          : pageOption.pageNumber - 1,
      pageSize: pageOption.pageSize,
    });
  };

  const handlebtnNext = (): void => {
    setPageOption({
      pageNumber:
        pageOption.pageNumber < totalRecords
          ? pageOption.pageNumber + 1
          : pageOption.pageNumber,
      pageSize: pageOption.pageSize,
    });
  };

  const getPageDetails = (): string => {
    const dataStartNumber =
      (pageOption.pageNumber - 1) * pageOption.pageSize + 1;

    const dataEndNumber = pageOption.pageNumber * pageOption.pageSize;

    return `${dataStartNumber}~${
      dataEndNumber < totalRecords ? dataEndNumber : totalRecords
    }`;
  };

  function handlebtnSave(): void {
    throw new Error("Function not implemented.");
  }

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
            <input type="text" id="" className=""></input>
          </div>
          <div className="orders__col-2-2-2">
            <input type="text" className="" />
          </div>
          <div className="orders__col-2-3-3">
            <input type="text" className="" />
          </div>
          <div className="orders__col-3-1-4">
            <input type="text" className=""></input>
          </div>
          <div className="orders__col-3-2-5">
            <input type="text" className="" />
          </div>
          <div className="orders__col-3-3-6">
            <input type="text" className="" />
          </div>
          <div className="orders__col-4-7">
            <input type="text" className="" />
          </div>
          <div className="orders__col-5-8">
            <input type="text" className="" />
          </div>
        </div>
        <div style={{ height: "52vh", overflowY: "scroll" }}>
          {isLoading && <MainLoader />}
          {!isLoading &&
            userOrders?.map((item: IOrdersInfo, index: number) => {
              return (
                <div className="orders-info_container" key={index}>
                  <div className="orders__col-1">
                    {(pageOption.pageNumber - 1) * pageOption.pageSize +
                      index +
                      1}
                  </div>
                  <div className="orders__col-2-1-1">
                    {item?.Hairdresser?.Name}
                  </div>
                  <div className="orders__col-2-2-2">
                    {item?.Hairdresser?.Id}
                  </div>
                  <div className="orders__col-2-3-3">
                    {item?.Hairdresser?.Phone}
                  </div>
                  <div className="orders__col-3-1-4">{item?.User?.Name}</div>
                  <div className="orders__col-3-2-5">{item?.User?.Id}</div>
                  <div className="orders__col-3-3-6">{item?.User?.Phone}</div>
                  <div className="orders__col-4-7">{item?.Service?.Name}</div>
                  <div className="orders__col-5-8">{item?.DateTime}</div>
                </div>
              );
            })}
        </div>
        <div
          className="orders-page__pagination"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <h3>Sahifada jadvaldagi qatorlar soni</h3>
          <select onChange={(e) => handleOptionChange(Number(e.target.value))}>
            <option>5</option>
            <option selected>10</option>
            <option>15</option>
          </select>
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {getPageDetails()}
          </div>
          <button
            onClick={() => handlebtnPrev()}
            disabled={pageOption.pageNumber === 1}
          >
            Prev
          </button>
          <button
            onClick={() => handlebtnNext()}
            disabled={
              pageOption.pageNumber * pageOption.pageSize >= totalRecords
            }
          >
            Next
          </button>
          <button onClick={() => handlebtnSave()}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
