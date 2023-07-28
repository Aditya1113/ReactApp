import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Menu from "./components/Menu";
import UsersRoute from "./components/Pages/UsersRoute";
import Posts from "./components/Pages/Posts";
import Latest from "./components/Pages/Latest";
import Disliked from "./components/Pages/Disliked";
import Liked from "./components/Pages/Liked";
import Oldest from "./components/Pages/Oldest";
import EditUser from "./components/Pages/EditUser";
import EditPost from "./components/Pages/EditPost";
import AddPost from "./components/Pages/AddPost";
import UserLogin from "./components/Pages/UserLogin";
import SignUp from "./components/Pages/SignUp";
import TodoMain from "./components/TodoList/TodoMain";

function MyApp() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />}>
          <Route path="latest" element={<Latest />} />
          <Route path="oldest" element={<Oldest />} />
          <Route path="liked" element={<Liked />} />
          <Route path="disliked" element={<Disliked />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoMain />} />
        <Route path="/users" element={<UsersRoute />} />
        {/* <Route path="*" element={<ViewNotFound/>}/> */}

        <Route path="/users/:id" element={<EditUser />} />

        <Route path="/posts/latest/edit/:id" element={<EditPost />} />
        {/* :id -> placeholder */}
        <Route path="add" element={<AddPost />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyApp;
