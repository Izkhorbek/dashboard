import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../Apis/userLoginApi";
import mainLogo from "../../../assets/images/logo.png";
import ILoginResponse from "../../../Interface/ILoginResponse";
import { setLoggedInUser } from "../../../Storage/Redux/userSlice";
import InputHelper from "../../../Helper/InputHelper";
import "./StartWindow.css";
import IUserModel from "../../../Interface/IUserMode";
import { jwtDecode } from "jwt-decode";
function StartWindow() {
  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
  });
  const [loading, SetLoading] = useState(false);
  const [login] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    SetLoading(true);

    const response: any = await login({
      userName: userInput.userName,
      password: userInput.password,
    });
    if (response) {
      const { data }: ILoginResponse = response;
      if (data?.IsSuccess) {
        const { Token } = data?.Result;
        localStorage.setItem("token", Token);
        const { username, role }: IUserModel = jwtDecode(Token);
        console.log(username);
        dispatch(
          setLoggedInUser({
            username: username,
            role: role,
          })
        );
        navigate("/dashboard");
      } else {
        console.log(data?.ErrorMessage);
      }
    }
    SetLoading(false);
  };
  const handleUserInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = InputHelper(e, userInput);
    setUserInput(tempData);
  };
  return (
    <div className="startPage-container">
      <div className="startPage-icon">
        <img style={{ height: "15rem" }} src={mainLogo} alt=""></img>
        <form
          method="post"
          // OnSubmitda Lamba function ishlatib bo'lmas ekan.
          onSubmit={handleSubmitLogin}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            className="startPage-userName"
            type="text"
            placeholder="Enter Username"
            name="userName"
            value={userInput.userName}
            //lamba function ishlatib bolmadi
            onChange={handleUserInput}
            required
          />
          <input
            type="password"
            className="startPage-password"
            placeholder="Enter Password"
            name="password"
            value={userInput.password}
            //lamba function ishlatib bolmadi
            onChange={handleUserInput}
            required
          />
          <button className="startPage-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StartWindow;
