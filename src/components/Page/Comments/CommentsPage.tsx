import React, { useEffect, useState } from "react";
import { useGetPagedCommentsQuery } from "../../../Apis/commentsApi";
import { IComment } from "../../../Interface/IComment";
import MainLoader from "../../MainLoader/MainLoader";
import "./CommentsPage.css";
const CommentsPage = () => {
  const [pageOption, setPageOption] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const [commentsInfo, SetCommentsInfo] = useState([]);
  const [totalRecords, SetTotalRecords] = useState(0);

  const { data, isLoading } = useGetPagedCommentsQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      SetCommentsInfo(data.apiResponse.Result);
      const { TotalPages } = JSON.parse(data.totalRecords);
      SetTotalRecords(TotalPages);
    }
  }, [data]);

  const handleOptionChange = (pageSize: number): void => {
    setPageOption({
      pageNumber: pageOption.pageNumber,
      pageSize: pageSize,
    });
  };

  const getPageDetails = (): string => {
    const startNumber = (pageOption.pageNumber - 1) * pageOption.pageSize + 1;
    const endNumber = pageOption.pageNumber * pageOption.pageSize;

    return `${startNumber}~${
      endNumber < totalRecords ? endNumber : totalRecords
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
    <div className="comments-page">
      <h1 className="comments__title">FOYDALANUVCHILAR ORASIDAGI SHARHLAR</h1>
      <div className="comments__container">
        {/* Row 1 */}
        <div className="comments__col-1">T/r</div>
        <div className="comments__col-2">Xizmat beruvchilar</div>
        <div className="comments__col-3">Xizmat oluvchilar</div>
        <div className="comments__col-4">Sharhlar</div>
        <div className="comments__col-5">Vaqt</div>
        <div className="comments__col-6">Harakat</div>
        <div className=""></div>
        {/* Row 2 */}
        <div className="comments__col-2-2">Ism-sharifi</div>
        <div className="comments__col-2-3">ID raqami</div>
        <div className="comments__col-3-4">Ism-sharifi</div>
        <div className="comments__col-3-5">ID raqami</div>
        {/* Row 3 */}
        <div className="comments__col-2-2-2">
          <input type="text" />
        </div>
        <div className="comments__col-2-3-3">
          <input type="text" />
        </div>
        <div className="comments__col-3-4-4">
          <input type="text" />
        </div>
        <div className="comments__col-3-5-5">
          <input type="text" />
        </div>
        <div className="comments__col-5-6-6">
          <input type="text" />
        </div>
      </div>
      <div style={{ height: "50vh", overflowY: "scroll" }}>
        {isLoading && <MainLoader />}
        {!isLoading &&
          commentsInfo?.map((item: IComment, index: number) => {
            return (
              <div className="comments-info__container" key={index}>
                <div className="comments-info__col-1">
                  {(pageOption.pageNumber - 1) * pageOption.pageSize +
                    index +
                    1}
                </div>
                <div className="comments-info__col-2-2-2">
                  {item.Hairdresser.Name + " " + item.Hairdresser.Surname}
                </div>
                <div className="comments-info__col-2-3-3">
                  {item.HairdresserId}
                </div>
                <div className="comments-info__col-3-4-4">
                  {item.User.Name + " " + item.User.Surname}
                </div>
                <div className="comments-info__col-3-5-5">{item.UserId}</div>
                <div className="comments-info__col-3-5-6">{item.Comment}</div>
                <div className="comments-info__col-5-6-7">{item.DateTime}</div>
                <div className="comments-info__col-5-6-8">"No action yet"</div>
              </div>
            );
          })}
      </div>
      <div
        className="comments-page__pagination"
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
          disabled={pageOption.pageNumber * pageOption.pageSize >= totalRecords}
        >
          Next
        </button>
        <button onClick={() => handlebtnSave()}>Save</button>
      </div>
    </div>
  );
};

export default CommentsPage;
