import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { NotCachedPassengers } from "./passengers/notCached/notCached";
import { CachedPassengers } from "./passengers/cached/cached";
import { UserForm } from "./users/form/userForm";
import { UserList } from "./users/list/list";
import { Welcome } from "./welcome/welcome";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoadMorePassengers } from "./passengers/loadMore/loadMore";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/users"} element={<UserList />}></Route>
        <Route path={"/users-2"} element={<UserList />}></Route>
        <Route path={"/add-user"} element={<UserForm />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/airlines-paginated" element={<CachedPassengers />} />
        <Route path="/airlines" element={<NotCachedPassengers />} />
        <Route path="/airlines-load-more" element={<LoadMorePassengers />} />
      </Routes>
      <Toaster />
      <ReactQueryDevtools />
    </Layout>
  );
}

export default App;
