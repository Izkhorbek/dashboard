import React, { useEffect, useState } from "react";
import "./ServicerPage.css";
import { useNavigate } from "react-router-dom";
import { useGetAllHairdresserQuery } from "../../../Apis/hairdresserApi";
import HairdresserInfo from "../../../Interface/IHairdresserInfo";
import MainLoader from "../../MainLoader/MainLoader";

function ServicerPage() {
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageOptions, setPageOptions] = useState({
    pageNumber: 1,
    pageSize: 10,
  });
  const [hairdresserData, setHairdresserData] = useState([]);

  const [currentPageSize, setCurrentPageSize] = useState(pageOptions.pageSize);

  const { data, isLoading } = useGetAllHairdresserQuery({
    pageNumber: pageOptions.pageNumber,
    pageSize: pageOptions.pageSize,
  });

  useEffect(() => {
    if (data) {
      setHairdresserData(data.apiResponse.Result);
      const { TotalPages } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalPages);
    }
  }, [data]);

  const handleOptionChange = (pageSize?: number) => {
    if (pageSize) {
      setCurrentPageSize(pageSize ? pageSize : 5);
      setPageOptions({
        pageSize: pageSize ? pageSize : 5,
        pageNumber: pageOptions.pageNumber,
      });
    }
    getPageDetails();
  };

  const navigate = useNavigate();

  const getPageDetails = () => {
    const dataSmartNumber =
      (pageOptions.pageNumber - 1) * pageOptions.pageSize + 1;
    const dataEndNumber = pageOptions.pageNumber * pageOptions.pageSize;

    return `${dataSmartNumber} ~ ${
      dataEndNumber < totalRecords ? dataEndNumber : totalRecords
    } of ${totalRecords}`;
  };

  const handlebtnPrev = () => {
    setPageOptions({
      pageNumber:
        pageOptions.pageNumber === 1
          ? pageOptions.pageNumber
          : pageOptions.pageNumber - 1,
      pageSize: pageOptions.pageSize,
    });
    getPageDetails();
  };

  const handlebtnNext = () => {
    setPageOptions({
      pageNumber:
        pageOptions.pageNumber < totalRecords
          ? pageOptions.pageNumber + 1
          : pageOptions.pageNumber,
      pageSize: pageOptions.pageSize,
    });
    getPageDetails();
  };

  const handleNavigate = () => {
    navigate("/users/details");
  };
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

      <div style={{ height: "60vh" }}>
        {isLoading && <MainLoader />}
        {!isLoading &&
          hairdresserData?.map((item: HairdresserInfo, index: number) => {
            return (
              <div className="servicer-page-info__container" key={index}>
                <div className="servicer-col-1">
                  <img
                    src={item.UploadImage}
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <div className="servicer-col-2--1">{item.Id}</div>
                <div
                  className="servicer-col-3--1"
                  onClick={() => handleNavigate()}
                >
                  {item.Name}
                </div>
                <div
                  className="servicer-col-4--1"
                  onClick={() => handleNavigate()}
                >
                  {item.Surname}
                </div>
                <div className="servicer-col-5--1">{item.Profession}</div>
                <div className="servicer-col-6--1">{item.Phone}</div>
                <div className="servicer-col-7--1">
                  <select className="">
                    <option
                      selected={(!item.IsBlocked || !item.IsDeleted) && true}
                    >
                      Aktiv
                    </option>
                    <option
                      selected={(item.IsBlocked || item.IsDeleted) && true}
                    >
                      Noaktiv
                    </option>
                  </select>
                </div>
                <div className="servicer-col-8--1">
                  <select>
                    <option>Premium</option>
                    <option>Oddiy</option>
                  </select>
                </div>
              </div>
            );
          })}
      </div>
      <div className="servicer-page__pagination">
        <h3
          style={{ textAlign: "center", alignItems: "center", display: "flex" }}
        >
          Qatorlar soni
        </h3>
        <select
          className="pagination"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            handleOptionChange(Number(e.target.value));
          }}
          defaultValue={currentPageSize}
        >
          <option>5</option>
          <option>10</option>
        </select>
        <div
          style={{ textAlign: "center", alignItems: "center", display: "flex" }}
        >
          {getPageDetails()}
        </div>
        <button
          disabled={pageOptions.pageNumber === 1}
          onClick={() => handlebtnPrev()}
        >
          Prev
        </button>
        <button
          disabled={
            pageOptions.pageNumber * pageOptions.pageSize >= totalRecords
          }
          onClick={() => handlebtnNext()}
        >
          Next
        </button>
        <button className="btnSave">Save</button>
      </div>
    </div>
  );
}

export default ServicerPage;
