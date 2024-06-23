import React, { useEffect } from "react";
import "./App.css";
import { SideBar } from "../components/Layout";
import {
  AppealsPage,
  ClientsPage,
  CommentsPage,
  DetailsPage,
  Header,
  MainWindow,
  MessagesPage,
  OrdersPage,
  ServicerPage,
  SettingsPage,
} from "../components/Page";
import { Route, Routes } from "react-router-dom";
import StartWindow from "../components/Page/MainWindow/StartWindow";
import { useDispatch } from "react-redux";
import IUserModel from "../Interface/IUserMode";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "../Storage/Redux/userSlice";
function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      const { username, role }: IUserModel = jwtDecode(token);
      dispatch(
        setLoggedInUser({
          username: username,
          role: role,
        })
      );
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      {/* Side Bar */}
      <SideBar />
      {/* Main Content */}
      <div className="main-content">
        {/* Header section*/}
        <Header />
        <Routes>
          <Route path="/Login" element={<StartWindow />}></Route>
          <Route path="/dashboard" element={<MainWindow />} />
          <Route path="/users/servicer" element={<ServicerPage />} />
          <Route path="/users/client" element={<ClientsPage />} />
          <Route path="/users/details" element={<DetailsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/comments" element={<CommentsPage />}></Route>
          <Route path="/appeals" element={<AppealsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
