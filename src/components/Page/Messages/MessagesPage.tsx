import React, { useEffect, useState } from "react";
import { useGetAllHairdresserQuery } from "../../../Apis/hairdresserApi";
import { useGetAllUserInfoQuery } from "../../../Apis/userInfoApi";
import IHairdresserInfo from "../../../Interface/IHairdresserInfo";
import IMessageUser from "../../../Interface/IMessageUser";
import IUserInfo from "../../../Interface/IUserInfo";
import { USER_TYPE } from "../../../utility/USER_TYPE";
import MainLoader from "../../MainLoader/MainLoader";
import "./MessagesPage.css";

function MessagesPage() {
  const [currentUserType, setCurrentUserType] = useState(USER_TYPE.USER);
  const [pageOption, setPageOption] = useState({
    pageNumber: 1,
    pageSize: 15,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [usersData, setUsersData] = useState<IMessageUser[]>([]);
  const [Loading, setLoading] = useState(false);

  const userInfo = useGetAllUserInfoQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  const hairdresserInfo = useGetAllHairdresserQuery({
    pageNumber: pageOption.pageNumber,
    pageSize: pageOption.pageSize,
  });

  useEffect(() => {
    if (currentUserType === USER_TYPE.USER) {
      if (userInfo) {
        const { data, isLoading } = userInfo;

        if (!isLoading) {
          setLoading(isLoading);

          const newData = data?.apiResponse.Result?.map((item: IUserInfo) => {
            return {
              isCheck: false,
              User: item,
            };
          });

          setUsersData(newData);
          const { TotalPages } = JSON.parse(data?.totalRecords);
          setTotalPages(TotalPages);
        } else setLoading(isLoading);
      }
    } else if (currentUserType === USER_TYPE.HAIRDRESSER) {
      if (hairdresserInfo) {
        const { data, isLoading } = hairdresserInfo;
        if (!isLoading) {
          setLoading(isLoading);
          const newData = data?.apiResponse.Result?.map(
            (item: IHairdresserInfo) => {
              return {
                isCheck: false,
                User: item,
              };
            }
          );
          setUsersData(newData);
          const { TotalPages } = JSON.parse(data?.totalRecords);
          setTotalPages(TotalPages);
        } else setLoading(isLoading);
      }
    }
  }, [userInfo, hairdresserInfo, currentUserType]);

  const handleUserTypeChange = (userType: USER_TYPE): void => {
    if (userType) {
      setCurrentUserType(userType);
    }
  };

  const handlePageOption = (pageSize: number): void => {
    setPageOption({
      pageNumber: pageOption.pageNumber,
      pageSize: pageSize,
    });
  };

  function handleClickPrev(): void {
    setPageOption({
      pageNumber:
        pageOption.pageNumber === 1
          ? pageOption.pageNumber
          : pageOption.pageNumber - 1,
      pageSize: pageOption.pageSize,
    });
  }

  function handleClickNext(): void {
    setPageOption({
      pageNumber:
        pageOption.pageNumber < totalPages
          ? pageOption.pageNumber + 1
          : pageOption.pageNumber,
      pageSize: pageOption.pageSize,
    });
  }

  const getPageDetauls = (): string => {
    const startNumber = (pageOption.pageNumber - 1) * pageOption.pageSize + 1;
    const endNumber = pageOption.pageNumber * pageOption.pageSize;
    return `${startNumber}/${endNumber < totalPages ? endNumber : totalPages}`;
  };

  // Handle All check and uncheck
  const handlecheckbtnAllCheck = (isCheck: boolean): void => {
    const updateUsersData = usersData.map((item: IMessageUser) => ({
      ...item,
      isCheck,
    }));

    setUsersData(updateUsersData);
  };

  const handleOneItemCheck = (index: number): void => {
    const updateUsersData = usersData.map(
      (item: IMessageUser, itemIndex: number) => ({
        ...item,
        isCheck: index === itemIndex ? !item.isCheck : item.isCheck,
      })
    );

    setUsersData(updateUsersData);
  };

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
              <input
                type="checkbox"
                onChange={(e) =>
                  handlecheckbtnAllCheck(Boolean(e.target.checked))
                }
              />
            </div>
            <div className="messages__info__container-col-2-2">
              <input type="text" />
            </div>
            <div className="messages__info__container-col-3-3">
              <select
                onChange={(e) =>
                  handleUserTypeChange(e.target.value as USER_TYPE)
                }
              >
                <option>{USER_TYPE.USER}</option>
                <option>{USER_TYPE.HAIRDRESSER}</option>
              </select>
            </div>
            <div className="messages__info__container-col-4-4">
              <input type="text" />
            </div>
          </div>
          {/* Shu yerga datalatni joylashtir */}
          <div style={{ height: "54vh", overflowY: "auto" }}>
            {Loading && <MainLoader />}
            {!Loading &&
              usersData?.map((item: IMessageUser, index: number) => {
                return (
                  <div className="messages-info__container" key={index}>
                    <div className="messages-info__container-col-1-1">
                      <input
                        type="checkbox"
                        onClick={() => handleOneItemCheck(index)}
                        checked={item.isCheck}
                      />
                    </div>
                    <div className="messages-info__container-col-2-2">
                      {item.User.Surname + " " + item.User.Name}
                    </div>
                    <div className="messages-info__container-col-3-3">
                      {currentUserType}
                    </div>
                    <div className="messages-info__container-col-4-4">
                      {item.User.Id}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="messages-page__pagination">
            <h3>Sahifada jadvaldagi qatorlar soni</h3>
            <select
              onChange={(e) => handlePageOption(Number(e.target.value))}
              defaultValue={pageOption.pageSize}
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
            <button
              onClick={() => handleClickPrev()}
              disabled={pageOption.pageNumber === 1}
            >
              Previous
            </button>
            <span>{getPageDetauls()}</span>
            <button
              onClick={() => handleClickNext()}
              disabled={
                pageOption.pageNumber * pageOption.pageSize >= totalPages
              }
            >
              Next
            </button>
          </div>
        </div>
        <div className="messages-page__messanger">
          <select className="messages-page__select">
            <option defaultChecked>Xabar usuli</option>
            <option>Xabar usuli1</option>
            <option>Xabar usuli2</option>
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
