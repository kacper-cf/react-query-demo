import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { UserForm } from "./users/form/userForm";
import { UserList } from "./users/list/list";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/users"} element={<UserList />}></Route>
        <Route path={"/add-user"} element={<UserForm />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
