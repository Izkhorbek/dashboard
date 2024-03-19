import React from "react";
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
function App() {
  return (
    <div className="App">
      {/* Side Bar */}
      <SideBar />
      {/* Main Content */}
      <div className="main-content">
        {/* Header section*/}
        <Header />
        <Routes>
          <Route path="/" element={<MainWindow />} />
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
