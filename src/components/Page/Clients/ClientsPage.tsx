import React, { useEffect, useState } from "react";
import "./ClientsPage.css";
import "../../../common-styles/common-styles.css";
import { useNavigate } from "react-router-dom";
import { useGetAllUserInfoQuery } from "../../../Apis/userInfoApi";
import IUserData from "../../../Interface/IUserData";
import IUserInfo from "../../../Interface/IUserInfo";
import { isTemplateSpan } from "typescript";
import MainLoader from "../../MainLoader/MainLoader";

function ClientsPage() {
  const [userInfoData, setUserInfoData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const [pageOption, setPageOption] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

  const [currentPageSize, setCurrentPageSize] = useState(pageOption.pageSize);

  //Set Page Size
  const { data, isLoading } = useGetAllUserInfoQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  //UseEffect
  useEffect(() => {
    if (data) {
      setUserInfoData(data.apiResponse.Result);
      const { TotalPages } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalPages);
    }
  }, [data]);

  //Handle pageSize Changing
  const handleOptionChange = (pageSize: number) => {
    if (pageSize) {
      setCurrentPageSize(pageSize);
      setPageOption({
        pageNumber: pageOption.pageNumber,
        pageSize: pageSize,
      });
    }
  };

  const getPageDetails = () => {
    const dataStartNumber =
      (pageOption.pageNumber - 1) * pageOption.pageSize + 1;
    const dataEndNumber = pageOption.pageNumber * pageOption.pageSize;

    return `${dataStartNumber} ~ ${
      dataEndNumber < totalRecords ? dataEndNumber : totalRecords
    } of ${totalRecords}`;
  };

  function handlebtnPrev(): void {
    setPageOption({
      pageNumber:
        pageOption.pageNumber === 1
          ? pageOption.pageNumber
          : pageOption.pageNumber - 1,
      pageSize: pageOption.pageSize,
    });
    getPageDetails();
  }

  function handlebtnNext(): void {
    setPageOption({
      pageNumber:
        pageOption.pageNumber < totalRecords
          ? pageOption.pageNumber + 1
          : pageOption.pageNumber,
      pageSize: pageOption.pageSize,
    });
  }

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
            <option>O`zbekcha</option>
            <option>Ruscha</option>
            <option>Krilcha</option>
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
      <div style={{ height: "57vh" }}>
        {isLoading && <MainLoader />}
        {!isLoading &&
          userInfoData?.map((item: IUserInfo, index: number) => {
            return (
              <div
                className="clients-page-info__container bg-white"
                key={index}
              >
                <div className="clients-col-1--1">{item.Id}</div>
                <div className="clients-col-2--1">{item.Name}</div>
                <div className="clients-col-3--1">{item.Surname}</div>
                <div className="clients-col-4--1 clients-orders">15</div>
                <div className="clients-col-5--1 clients-active-device">2</div>
                <div className="clients-col-6--1">{item.Phone}</div>
                <div className="clients-col-7--1">
                  <select className="">
                    <option selected={!item.IsBlocked}>Aktiv</option>
                    <option selected={item.IsBlocked}>Noaktiv</option>
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
            );
          })}
      </div>
      <div className="clients-page__pagination">
        <h3>Qatorlar soni</h3>
        <select onChange={(e) => handleOptionChange(Number(e.target.value))}>
          <option>5</option>
          <option selected>10</option>
          <option>15</option>
        </select>
        <div
          style={{ textAlign: "center", alignItems: "center", display: "flex" }}
        >
          {getPageDetails()}
        </div>
        <button
          disabled={pageOption.pageNumber === 1}
          onClick={() => handlebtnPrev()}
        >
          Prev
        </button>
        <button
          disabled={pageOption.pageNumber * pageOption.pageSize >= totalRecords}
          onClick={() => handlebtnNext()}
        >
          Next
        </button>
        <button className="btnSave">Save</button>
      </div>
    </div>
  );
}

export default ClientsPage;
