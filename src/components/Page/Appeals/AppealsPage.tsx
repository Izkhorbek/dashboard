import React, { useEffect, useState } from "react";
import { useGetAppealInfoQuery } from "../../../Apis/userAppealApi";
import { IAppeal } from "../../../Interface/IAppealInfo";
import MainLoader from "../../MainLoader/MainLoader";
import "./AppealsPage.css";

function AppealsPage() {
  const [userAppeals, setUserAppeals] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  const [pageOption, setPageOption] = useState({
    pageNumber: 1,
    pageSize: 15,
  });

  const [currentPageSize, setCurrentPageSize] = useState(pageOption.pageSize);

  const { data, isLoading } = useGetAppealInfoQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  useEffect(() => {
    if (data) {
      setUserAppeals(data.apiResponse?.Result);
      const { TotalPages } = JSON.parse(data.totalRecords);
      setTotalRecords(TotalPages);
    }
  }, [data]);

  const handleOptionChange = (pageSize: number): void => {
    if (pageSize) {
      setCurrentPageSize(pageSize);
      setPageOption({
        pageNumber: pageOption.pageNumber,
        pageSize: pageSize,
      });
    }
  };

  const getPageDetails = (): string => {
    const dataStartNumber =
      (pageOption.pageNumber - 1) * pageOption.pageSize + 1;

    const dataEndNumber = pageOption.pageNumber * pageOption.pageSize;

    return `${dataStartNumber}~${
      dataEndNumber < totalRecords ? dataEndNumber : totalRecords
    }`;
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

  const handlebtnSave = (): void => {};

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
            <option>new</option>
            <option>read</option>
            <option>replied</option>
          </select>
        </div>
        <div className="appeals__col-6-6">
          <select>
            <option value="">Suggestion</option>
            <option value="">Complaint</option>
          </select>
        </div>
        <div className="appeals__col-7-7">
          <input type="text"></input>
        </div>
      </div>
      <div
        style={{
          height: "57vh",
          overflowY: "scroll",
        }}
      >
        {isLoading && <MainLoader />}
        {!isLoading &&
          userAppeals.map((item: IAppeal, index: number) => {
            return (
              <div className="appeals-info__container" key={index}>
                <div className="appeals__col-1">
                  {(pageOption.pageNumber - 1) * pageOption.pageSize +
                    index +
                    1}
                </div>
                <div className="appeals__col-2">
                  {item.User.Surname + " " + item.User.Name}
                </div>
                <div className="appeals__col-3">{item.User.Id}</div>
                <div className="appeals__col-4">{item.User.Phone}</div>
                <div className="appeals__col-5">{item.State}</div>
                <div className="appeals__col-6">{item.Appeal.Name}</div>
                <div className="appeals__col-7">{item.DateTime}</div>
              </div>
            );
          })}
      </div>
      <div className="appeals-page__pagination">
        <h3>Sahifada jadvaldagi qatorlar soni</h3>
        <select onChange={(e) => handleOptionChange(Number(e.target.value))}>
          <option>5</option>
          <option>10</option>
          <option selected>15</option>
          <option>20</option>
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
          disabled={pageOption.pageNumber * pageOption.pageSize >= totalRecords}
        >
          Next
        </button>
        <button onClick={() => handlebtnSave()}>Save</button>
      </div>
    </div>
  );
}

export default AppealsPage;
