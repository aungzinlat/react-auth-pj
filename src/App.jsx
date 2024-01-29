// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  HomePage,
  InventoryPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  UserPage,
} from "./page";
import { API_URL } from "./lib/constant";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
